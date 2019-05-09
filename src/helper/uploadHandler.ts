import request = require('request');

export const uploadFromLink = (url: string, type: string, callback: any) => {
    request({
        "uri": "https://graph.facebook.com/v2.6/me/message_attachments",
        "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": {
            "message":{
                "attachment":{
                    "type":type,
                    "payload":{
                        "is_reusable": true,
                        "url": url
                    }
                }
            }
        }
    }, (err, _res, body) => {
        if (!err) {
            if(body.attachment_id !== undefined) callback(body.attachment_id);
        } else {
            throw err;
        }
    });
};
