import {RequestUserController} from '../../controller/requestUserController';
import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';
import {FbQuickReplyButton} from '../../framework/model';
import {Postbacks} from '../../helper/postbacks';

const sendLove = async (fromId: string, toId: string) => {
    await RequestUserController.addRequestUser(fromId, toId);
    await sendRequestMessage(fromId, toId);
    FbMessAPI.sendText(fromId, 'Đã gửi yêu cầu.');
};

const sendRequestMessage = async (fromId: string, toId: string) => {
    const user = await UserController.getUser(fromId);
    const buttons: FbQuickReplyButton[] = [
        {
            'content_type':'text',
            'title':'Dôôô',
            'payload': Postbacks.Accept + fromId,
            'image_url':'https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png'
        },
        {
            'content_type':'text',
            'title':'Xem mấy đứa khác',
            'payload': "",
            'image_url':'https://cdn0.iconfinder.com/data/icons/music-sets/500/207-512.png'
        }
    ];
    FbMessAPI.sendQuickReplyWithText(toId,`*${user.name}* đã thích hình của bạn. Muốn nhắn tin luôn hông?`, buttons);
};

export {sendLove as SendLove}
