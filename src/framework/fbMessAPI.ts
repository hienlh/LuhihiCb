import * as rp from 'request-promise';
import {RequestPromise} from 'request-promise';
import {FbAction, FbQuickReply, FbQuickReplyAttachment, FbQuickReplyButton, FbUserProfile, Greeting} from './model';
import {SendFbRequest} from './sendFbRequest';

export interface IFacebookMessengerAPI {
    send: (senderId: string, message: any) => RequestPromise,
    sendText: (senderId: string, text: string) => RequestPromise,
    sendTextAsPersona: (senderId: string, personaId: string, text: string) => RequestPromise,
    sendQuickReplyWithText: (senderId: string, text: string, buttons: FbQuickReplyButton[]) => RequestPromise,
    sendQuickReplyWithAttachment: (senderId: string, attachment: FbQuickReplyAttachment, buttons: FbQuickReplyButton[]) => RequestPromise,
    setGreeting: (greeting: Greeting) => RequestPromise,
    setGetStarted: (postbackPayload: string) => RequestPromise,
    setPersistentMenu: (actions: FbAction[]) => RequestPromise,
    getUserProfile: (senderId: string) => Promise<FbUserProfile>,
    /**
     * Return attachment id to reuse
     */
    uploadFromUrl: (url: string, type: string) => Promise<string>,
    /**
     * Create persona, return persona id.
     */
    createPersona: (name: string, profile_picture_url: string) => Promise<string>,
    // sendURLButton: (title: string, url: string, webview_height_ratio: string)
}

const fbMessAPI: IFacebookMessengerAPI = {
    send: (senderId, message) => {
        const request_body = {
            'recipient': {
                'id': senderId
            },
            message
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messages', request_body);
    },
    sendText: (senderId, text) => {
        const request_body = {
            recipient: {
                id: senderId
            },
            message: {text}
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messages', request_body);
    },
    sendTextAsPersona: (senderId, personaId, text) => {
        const request_body = {
            recipient: {
                id: senderId
            },
            message: {text},
            persona_id: personaId
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messages', request_body);
    },
    sendQuickReplyWithText: (senderId, text, buttons) => {
        const requestBody = {
            'recipient': {
                'id': senderId
            },
            message: {
                text,
                quick_replies: buttons
            }
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messages', requestBody);
    },
    sendQuickReplyWithAttachment: (senderId, attachment, buttons) => {
        const requestBody = {
            'recipient': {
                'id': senderId
            },
            message: {
                attachment,
                quick_replies: buttons
            }
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messages', requestBody);
    },
    setGreeting: greeting => {
        const request_body = {
            greeting
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messenger_profile', request_body);
    },
    setGetStarted: (postbackPayload) => {
        const request_body = {
            'get_started': {
                payload: postbackPayload
            }
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messenger_profile', request_body);
    },
    setPersistentMenu: (actions) => {
        const request_body = {
            'persistent_menu': [{
                'locale': 'default',
                'composer_input_disabled': false,
                'call_to_actions': actions
            }]
        };
        return SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/messenger_profile', request_body);
    },
    getUserProfile: async senderId => {
        try {
            const res = await rp.get({
                uri: 'https://graph.facebook.com/' + senderId,
                qs: {
                    access_token: process.env.PAGE_ACCESS_TOKEN,
                    fields: 'name,profile_pic,locale,timezone,gender'
                },
                json: true
            });
            return res as FbUserProfile;
        } catch (e) {
            console.log(e.message);
        }
    },
    uploadFromUrl: async (url, type) => {
        const request_body = {
            'message': {
                'attachment': {
                    'type': type,
                    'payload': {
                        'is_reusable': true,
                        'url': url
                    }
                }
            }
        };
        const result = await SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/v2.6/me/message_attachments', request_body);
        return result.attachment_id;
    },
    createPersona: async (name, profile_picture_url) => {
        const requestBody = {name, profile_picture_url};
        const result = await SendFbRequest.postWithPageAccessToken('https://graph.facebook.com/me/personas', requestBody);
        return result.id;
    }
};

export {fbMessAPI as FbMessAPI}
