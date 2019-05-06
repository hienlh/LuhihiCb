import {NextFunction, Request, Response, Router} from 'express';
import messageHandler, {MessageType} from './framework/MessageHandler';
import {handleMessage} from './handleMessage';
import VerificationRouter from './verification/router';

const router = Router();

router.use('/', VerificationRouter);

router.post('/', createEndpoint);

messageHandler.hears(MessageType.message, handleMessage);

export function createEndpoint(req: Request, res: Response, next: NextFunction) {
    let body = req.body;
    if (body.object === 'page') {
        body.entry.forEach(function (entry) {
            let webhookEvent = entry.messaging[0];
            const senderId = webhookEvent.sender.id;
            console.log(senderId);
            if (webhookEvent.message) {
                messageHandler.callHandleMessage(senderId, webhookEvent.message);
            } else if (webhookEvent.postback) {
                messageHandler.callHandlePostback(senderId, webhookEvent.postback);
            }
        });
        res.status(200).send('EVENT_RECEIVED');
    } else next();
}

export default router;
