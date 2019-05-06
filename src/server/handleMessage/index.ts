import {FbSender} from '../framework/FbSender';
import {handleAttachment} from './handlerAttachment';
import {handleText} from './handlerText';

export const handleMessage = (senderId: string, receivedMessage: any) => {
    if (receivedMessage.text) {
        FbSender.sendText(senderId, handleText(receivedMessage.text));
    } else if (receivedMessage.attachments) {
        handleAttachment(receivedMessage.attachments,
            response => FbSender.send(senderId, response));
    }
};
