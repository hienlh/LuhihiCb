import {NextFunction, Request, Response, Router} from 'express';
import messageHandler, {MessageType} from '../framework/MessageHandler';
import {handleMessage} from '../handler/handleMessage';
import {handlePostback} from '../handler/handlePostback';
import HandleSender from '../handler/handleSender';
import VerificationRouter from '../verification/router';

const router = Router();

router.use('/', VerificationRouter);

router.post('/', createEndpoint);

messageHandler.hears(MessageType.message, handleMessage);
messageHandler.hears(MessageType.postback, handlePostback);

export function createEndpoint(req: Request, res: Response, next: NextFunction) {
    let body = req.body;
    if (body.object === 'page') {
        body.entry.forEach(function (entry) {
            if(!entry.messaging) return next();
            let webhookEvent = entry.messaging[0];
            const senderId = webhookEvent.sender.id;
            if (webhookEvent.message) {
                if (!webhookEvent.message.app_id) {
                    HandleSender(senderId);
                    if (webhookEvent.message.quick_reply) {
                        messageHandler.callHandlePostback(senderId, webhookEvent.message.quick_reply.payload);
                    } else messageHandler.callHandleMessage(senderId, webhookEvent.message);
                }
            } else if (webhookEvent.postback) {
                HandleSender(senderId);
                messageHandler.callHandlePostback(senderId, webhookEvent.postback.payload);
            }
        });
        res.status(200).send('EVENT_RECEIVED');
    } else next();
}

export default router;
