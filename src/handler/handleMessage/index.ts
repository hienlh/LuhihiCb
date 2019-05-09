import {UserController} from '../../controller/userController';
import {UserPictureController} from '../../controller/userPictureController';
import {FbMessAPI} from '../../framework/fbMessAPI';
import {handleAttachment} from './handlerAttachment';
import {handleText} from './handlerText';

export const handleMessage = async (senderId: string, receivedMessage: any) => {
    if (await UserController.isChattingWith(senderId)) {
        const user = await UserController.getUser(senderId);
        if (receivedMessage.text) {
            FbMessAPI.sendTextAsPersona(user.chattingWith.userId, user.personaId, receivedMessage.text)
                .then(() => console.log('Sent!'))
                .catch(() => console.log('Send error!'));
        } else if (receivedMessage.attachments)
        {
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
                    FbMessAPI.sendAsPersona(user.chattingWith.userId, user.personaId, requestBody);
                })
            }
            else FbMessAPI.sendText(senderId, 'Chatbot chưa hổ trợ gửi loại tin nhắn này!')
        }
        else FbMessAPI.send(senderId, 'Chatbot chưa hổ trợ gửi loại tin nhắn này!')
    } else {
        if (receivedMessage.text) {
            FbMessAPI.sendTextAsPersona(senderId, '355633685296064', handleText(receivedMessage.text))
                .then(() => console.log('Sent!'))
                .catch(() => console.log('Send error!'));
        } else if (receivedMessage.attachments) {
            handleAttachment(senderId, receivedMessage.attachments);
        }
    }
};

