import {UserPictureController} from '../controller/userPictureController';
import {FbMessAPI} from '../framework/fbMessAPI';

export const handleAttachment = (senderId: string, attachments: any) => {
    let type = attachments[0].type;
    let url = attachments[0].payload.url;

    if (type === 'image') {
        if (!attachments[0].payload.sticker_id)
            FbMessAPI.uploadFromUrl(url, type).then(attachmentId => {
                UserPictureController.addUserPicture(senderId, attachmentId, new Date())
                    .then(() => UserPictureController.selectPicture(senderId, attachmentId))
                    .then(() => FbMessAPI.sendText(senderId, 'Đã cập nhật hình.'))
            }).catch(() => FbMessAPI.sendText(senderId, 'Có lỗi khi cập nhật hình.'))
    }
};
