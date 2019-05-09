import {UserController} from '../../controller/userController';

export const removePicture = async (userId: string) => {
    await UserController.removePicture(userId);
};
