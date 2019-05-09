import {UserPictureController} from '../controller/userPictureController';
import {UserPicture} from '../entity/UserPicture';
import {FbMessAPI} from '../framework/fbMessAPI';
import {FbQuickReply, FbQuickReplyAttachment, FbQuickReplyButton} from '../framework/model';
import {Postbacks} from '../helper/postbacks';

const randomPicture = async (senderId: string) => {
    const pictures = await UserPictureController.getAllSelectedPicture();
    if (pictures.length === 1 && pictures[0].userId === senderId) {
        return FbMessAPI.sendText(senderId, 'Không tìm thấy hình mới!');
    }

    let result: UserPicture;
    do {
        result = pictures[Math.floor(Math.random() * pictures.length)]
    } while (result.userId === senderId);

    const attachment: FbQuickReplyAttachment = {
        'type': 'template',
        'payload': {
            'template_type': 'media',
            'elements': [
                {
                    'media_type': 'image',
                    'attachment_id': result.attachmentId
                }
            ]
        }
    };
    const buttons: FbQuickReplyButton[] = [
        {
            'content_type':'text',
            'title':'Yêu thích',
            'payload':'LOVE_' + result.userId,
            'image_url':'https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png'
        },
        {
            'content_type':'text',
            'title':'Người tiếp theo',
            'payload': Postbacks.ViewPicture,
            'image_url':'https://cdn0.iconfinder.com/data/icons/music-sets/500/207-512.png'
        }
    ];
    return FbMessAPI.sendQuickReplyWithAttachment(senderId, attachment, buttons);
};

const viewUserPicture = async (senderId: string) => {
    const picture = await UserPictureController.getCurrentUserPicture(senderId);
    if (picture) {
        const requestBody = {
            'attachment': {
                'type': 'template',
                'payload': {
                    'template_type': 'media',
                    'elements': [
                        {
                            'media_type': 'image',
                            'attachment_id': picture.attachmentId
                        }
                    ]
                }
            }
        };
        FbMessAPI.send(senderId, requestBody);
    } else FbMessAPI.sendText(senderId, 'Mày chưa up hình lấy đâu mà xem.')
};

export  {
    randomPicture as RandomPicture,
    viewUserPicture as ViewUserPicture
}
