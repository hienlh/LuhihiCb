import {RequestUserController} from '../../controller/requestUserController';
import {UserPictureController} from '../../controller/userPictureController';
import {UserPicture} from '../../entity/UserPicture';
import {FbMessAPI} from '../../framework/fbMessAPI';
import {FbQuickReplyAttachment, FbQuickReplyButton} from '../../framework/model';
import {Postbacks} from '../../helper/postbacks';

const randomPicture = async (senderId: string) => {
    // Lấy ra danh sách hình
    let pictures = await UserPictureController.getAllSelectedPicture();

    // Bỏ qua ảnh của những người đã gửi request
    // Bỏ qua hình của chính mình
    const requestedUsers = await RequestUserController.getAllRequestOfUser(senderId);
    for (const requestedUser of requestedUsers) {
        pictures = pictures.filter(picture =>
            picture.userId !== requestedUser.userRequestId && picture.userId != senderId);
    }

    if (pictures.length === 0) {
        return FbMessAPI.sendText(senderId, 'Không tìm thấy hình mới!');
    }

    let result = pictures[Math.floor(Math.random() * pictures.length)];

    // Soạn tin nhắn để trả lời lại user
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
            'content_type': 'text',
            'title': 'Yêu thích',
            'payload': 'LOVE_' + result.userId,
            'image_url': 'https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png'
        },
        {
            'content_type': 'text',
            'title': 'Người tiếp theo',
            'payload': Postbacks.ViewPicture,
            'image_url': 'https://cdn0.iconfinder.com/data/icons/music-sets/500/207-512.png'
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

export {
    randomPicture as RandomPicture,
    viewUserPicture as ViewUserPicture
}
