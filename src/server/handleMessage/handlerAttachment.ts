import {Postback} from '../framework/model';
import {Func} from '../framework/utils';
import {uploadFromLink} from '../helper/uploadHandler';

export const handleAttachment = (attachments: any, callback: Func<[any]>) => {
    let type = attachments[0].type;
    let url = attachments[0].payload.url;

    uploadFromLink(url, type, (attachment_id) => {
        let response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "media",
                    "elements": [
                        {
                            "media_type": type,
                            "attachment_id": attachment_id,
                            "buttons": [
                                new Postback('Love!', 'love'),
                                new Postback('Next', 'next')
                            ]
                        }
                    ]
                }
            }
        };
        callback(response);
    });
};
