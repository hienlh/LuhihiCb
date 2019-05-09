import {FbMessAPI} from '../framework/FbMessAPI';
import {handleAttachment} from './handlerAttachment';
import {handleText} from './handlerText';

export const handleMessage = (senderId: string, receivedMessage: any) => {
    if (receivedMessage.text) {
        FbMessAPI.sendTextAsPersona(senderId, '355633685296064', handleText(receivedMessage.text))
            .then(()=>console.log('Sent!'))
            .catch(()=>console.log('Send error!'));
    } else if (receivedMessage.attachments) {
        handleAttachment(senderId, receivedMessage.attachments);
    }
};

