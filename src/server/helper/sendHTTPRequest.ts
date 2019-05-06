import request = require('request');

export const sendHttpRequest = (uri: string, request_body: any) => {
    request({
        "uri": uri,
        "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, _res, body) => {
        if (!err) {
            console.log('Message sent!');
            console.log(body);
        } else {
            console.error("Unable to send message:" + err);
        }
    });
}
