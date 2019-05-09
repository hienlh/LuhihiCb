import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';

export const getStarted = async (userId: string) => {
    if(await UserController.getUser(userId)){
        FbMessAPI.sendText(userId, 'Chào mừng đã trở lại!');
    } else FbMessAPI.sendText(userId, 'Chào mừng bạn đến với chúng tôi! Tôi là một con bot vui vẻ!');
};
