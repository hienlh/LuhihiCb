export interface FbMessage {
    readonly sender: {
        readonly id: string
    };
    readonly recipient: {
        readonly id: string
    };
    readonly message?: {
        readonly mid: string;
        readonly text?: string;
        readonly seq?: number;
        readonly attachments?: FbAttachment[];
        readonly quick_reply?: {
            readonly payload: string;
        }
    }
}

export interface FbAttachment {
    readonly type: 'template' | 'audio' | 'fallback' | 'file' | 'image' | 'location' | 'video';
    readonly payload: FbMultimedia | FbLocation;
    readonly title?: string;
    readonly URL?: string;
}

export interface FbMultimedia {
    readonly url: string;
}

export interface FbLocation {
    readonly coordinates: {
        readonly lat: number;
        readonly long: number;
    }
}

export class Postback {
    readonly type:string = 'postback';
    readonly title: string;
    readonly payload: string;

    public constructor(title: string, payload: string) {
        this.title = title;
        this.payload = payload;
    }
}
