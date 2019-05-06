import {sendHttpRequest} from '../helper/sendHTTPRequest';

export class FbSender {
    public static send = (senderId: string, response: any) => {
        const request_body = {
            'recipient': {
                'id': senderId
            },
            'message': response
        };
        sendHttpRequest('https://graph.facebook.com/v2.6/me/messages', request_body);
    };
    
    public static sendText = (senderId: string, text: string) => {
        const request_body = {
            'recipient': {
                'id': senderId
            },
            'message': {text}
        };
        sendHttpRequest('https://graph.facebook.com/v2.6/me/messages', request_body);
    }
}
