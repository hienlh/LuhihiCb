import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';

export const cancelChat = async (userId: string) => {
    if(!await UserController.isChattingWith(userId)) {
        FbMessAPI.sendText(userId, 'Có đang chat với ai đâu mà dừng!');
        return;
    }
    const deleteUserId = await UserController.removeChatWith(userId);
    await UserController.removeChatWith(deleteUserId);
    FbMessAPI.sendText(deleteUserId, 'Đối phương đã ngừng chat với bạn.');
    FbMessAPI.sendText(userId, 'Đã xong. Đi tìm tình yêu mới thôi nào!');
};
