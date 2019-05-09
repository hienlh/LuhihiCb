import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';
import {handleAttachment} from './handlerAttachment';
import {handleText} from './handlerText';

export const handleMessage = async (senderId: string, receivedMessage: any) => {
    if (UserController.isChattingWith(senderId)) {
        const user = await UserController.getUser(senderId);
        if (receivedMessage.text) {
            FbMessAPI.sendTextAsPersona(user.chattingWith.userId, user.personaId, receivedMessage.text)
                .then(() => console.log('Sent!'))
                .catch(() => console.log('Send error!'));
        } else if (receivedMessage.attachments) {
        }
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

