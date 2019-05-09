import {UserController} from '../../controller/userController';

export const addChat = async (userId: string, chatId: string) => {
    await UserController.addChatWith(userId, chatId);
    await UserController.addChatWith(chatId, userId);
};
