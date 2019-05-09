import {UserController} from '../../controller/userController';
import {randomInArray} from '../../helper/randomInArray';

export const needLove = async (userId: string) => {
    await UserController.needLove(userId);
};

export const matchUser = async (userId: string) => {
    const user = await UserController.getUser(userId);
    if(!user.needLove) throw new Error('User don\'t need love');
    if(user.needLove && !!user.chattingWith) throw new Error('User is chatting. Can\'t match.');

    let users = await UserController.getAllUserNeedLove();
    users = users.filter((value) => value.gender != user.gender);
    if(users.length === 0) return;
    return randomInArray(users);
};
