import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';
import {handleAttachment} from './handlerAttachment';
import {handleText} from './handlerText';

export const handleMessage = async (senderId: string, receivedMessage: any) => {
    // Chat với người đớp thính
    if (await UserController.isChattingWithNeedLove(senderId)) {
        await sendMessage(senderId, receivedMessage);
    }
    // Chat như là một persona trong chatbot
    else if (await UserController.isChattingWith(senderId)) {
        await sendMessage(senderId, receivedMessage, true);
    }
    // CHat binh thuong
    else {
        if (receivedMessage.text) {
            FbMessAPI.sendText(senderId, handleText(receivedMessage.text))
                .then(() => console.log('Sent!'))
                .catch((e) => console.log(e));
        } else if (receivedMessage.attachments) {
            handleAttachment(senderId, receivedMessage.attachments);
        }
    }
};

const sendMessage = async (senderId: string, receivedMessage: any, isPersona: boolean = false) => {
    const user = await UserController.getUser(senderId);
    if (receivedMessage.text) {
        if (isPersona) {
            FbMessAPI.sendTextAsPersona(user.chattingWith.userId, user.personaId, receivedMessage.text)
                .then(() => console.log('Sent!'))
                .catch((e) => console.log(e));
        } else {
            FbMessAPI.sendText(user.chattingWith.userId, receivedMessage.text)
                .then(() => console.log('Sent!'))
                .catch((e) => console.log(e));
        }
    } else if (receivedMessage.attachments) {
        let type = receivedMessage.attachments[0].type;
        let url = receivedMessage.attachments[0].payload.url;

        if (!receivedMessage.sticker_id) {
            FbMessAPI.uploadFromUrl(url, type).then(attachmentId => {
                const requestBody = {
                    'attachment': {
                        'type': 'template',
                        'payload': {
                            'template_type': 'media',
                            'elements': [
                                {
                                    'media_type': type,
                                    'attachment_id': attachmentId
                                }
                            ]
                        }
                    }
                };

                if(isPersona) {
                    FbMessAPI.sendAsPersona(user.chattingWith.userId, user.personaId, requestBody);
                } else {
                    FbMessAPI.send(user.chattingWith.userId, requestBody);
                }
            })
        } else FbMessAPI.sendText(senderId, 'Chatbot chưa hổ trợ gửi loại tin nhắn này!')
    } else FbMessAPI.send(senderId, 'Chatbot chưa hổ trợ gửi loại tin nhắn này!')
};
