export type HandlerFunction = (string, any) => void;

export enum MessageType {
    message = 'message',
    postback = 'postback'
}

class MessageHandler {
    private readonly _handleMessage: HandlerFunction[];
    private readonly _handlePostback: HandlerFunction[];

    constructor() {
        this._handleMessage = [];
        this._handlePostback = [];
    }

    public hears(type: MessageType, callback: HandlerFunction) {
        switch (type) {
            case MessageType.message:
                this._handleMessage.push(callback);
                break;
            case MessageType.postback:
                this._handlePostback.push(callback);
                break;
        }
    }

    public callHandleMessage = (senderId: string, message: any) => {
        this._handleMessage.forEach((handle)=> {
            handle(senderId, message);
        })
    };

    public callHandlePostback = (senderId: string, message: any) => {
        this._handlePostback.forEach((handle)=> {
            handle(senderId, message);
        })
    };
}

export default new MessageHandler();
