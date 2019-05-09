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

export interface FbAction {
    readonly type: string;
    readonly title: string;
}

export class Postback implements FbAction {
    readonly type: string = 'postback';
    readonly title: string;
    readonly payload: string;

    public constructor(title: string, payload: string) {
        this.title = title;
        this.payload = payload;
    }
}

export class Nested implements FbAction {
    readonly type: string = 'nested';
    readonly title: string;
    readonly call_to_actions: FbAction[];

    public constructor(title: string, actions: FbAction[]) {
        this.title = title;
        this.call_to_actions = actions;
    }
}

export type Greeting = [{
    readonly locale: string;
    readonly text: string;
}]

export interface FbUserProfile {
    readonly id: string;
    readonly name: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly profile_pic: string;
    readonly locale: string;
    readonly timezone: number;
    readonly gender: string;
}

export interface FbQuickReply {
    readonly text?: string;
    readonly attachment?: FbQuickReplyAttachment;
    readonly quick_replies: FbQuickReplyButton[]
}

export interface FbQuickReplyAttachment {
    type: 'image' | 'audio' | 'video' | 'file' | 'template';
    payload: any;
}

export interface FbQuickReplyButton {
    readonly content_type: 'text' | 'location' | 'user_phone_number' | 'user_email';
    readonly title: string;
    readonly payload: string;
    readonly image_url: string;
}
