import * as rq from 'request-promise';

export interface ISendFbRequest {
    postWithPageAccessToken: (uri: string, body: any) => rq.RequestPromise,
    deleteWithPageAccessToken: (uri: string, body?: any) => rq.RequestPromise
}

const sendFbRequest: ISendFbRequest = {
    postWithPageAccessToken: (uri, body) => {
        return rq({
            method: 'POST',
            uri: uri,
            body: body,
            json: true,
            qs: {'access_token': process.env.PAGE_ACCESS_TOKEN}
        })
    },
    deleteWithPageAccessToken: (uri, body) => {
        return rq({
            method: 'DELETE',
            uri,
            body,
            json: true,
            qs: {'access_token': process.env.PAGE_ACCESS_TOKEN}
        })
    }
};

export {sendFbRequest as SendFbRequest}
