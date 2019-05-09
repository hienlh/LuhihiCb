import {FindManyOptions} from 'typeorm';
import {User} from "../entity/User";
import {UserPictureController} from './userPictureController';

export interface IUserController {
    /**
     * If user did not exist then create new user, else update new information.
     */
    saveUser: (userId: string, personaId: string, name: string, gender: string, locale: string, avatar: string) => Promise<User>;
    editUser: (userId: string, name?: string, gender?: string, locale?: string) => Promise<User>;
    deleteUser: (userId: string) => Promise<void>;
    getUser: (userId: string) => Promise<User>;
    getAllUser: (length?: number, offset?: number) => Promise<User[]>;
    getUsersBy: (name?: string, gender?: string, locale?: string, length?: number, offset?: number) => Promise<User[]>;
    getAllUserNeedLove: (gender?: string, locale?: string, length?: number, offset?: number) => Promise<User[]>;
    isCreated: (userId: string) => Promise<boolean>;
    isNeedLove: (userId: string) => Promise<boolean>;
    isChattingWith: (userId: string) => Promise<boolean>;
    isChattingWithNeedLove: (userId: string) => Promise<boolean>;
    addChatWith: (userId: string, chatWithId: string) => Promise<User>;
    needLove: (userId: string) => Promise<void>;
    notNeedLove: (userId: string) => Promise<void>;
    /**
     * Return previous chatting user id.
     */
    removeChatWith: (userId: string) => Promise<string>;
    removePicture: (userId: string) => Promise<void>;
}

const userController: IUserController = {
    saveUser: async (userId: string, personaId: string, name: string, gender: string, locale: string, avatar: string) => {
        const newUser = new User();
        newUser.userId = userId;
        newUser.personaId = personaId;
        newUser.name = name;
        newUser.gender = gender;
        newUser.locale = locale;
        newUser.avatar = avatar;
        return await newUser.save();
    },
    editUser: async (userId: string, name?: string, gender?: string, locale?: string) => {
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        if (name) user.name = name;
        if (gender) user.name = gender;
        if (locale) user.name = locale;
        return await user.save();
    },
    deleteUser: async (userId: string) => {
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        await user.remove();
    },
    getUser: async (userId: string) => {
        const user = await User.findOne(userId, {relations: ['chattingWith']});
        if (!user) throw new Error('User not found.');
        return user;
    },
    getAllUser: async (length?: number, offset?: number) => {
        return await User.find({take: length, skip: offset});
    },
    getUsersBy: async (name?: string, gender?: string, locale?: string, length?: number, offset?: number) => {
        let options: FindManyOptions = {};
        options.where = {};
        if (name) options.where['name'] = name;
        if (gender) options.where['gender'] = gender;
        if (locale) options.where['locale'] = locale;
        if (length) options.take = length;
        if (offset) options.skip = offset;
        return await User.find(options);
    },
    getAllUserNeedLove: async (gender, locale, length, offset) => {
        let options: FindManyOptions = {};
        options.where = {};
        options.where['needLove'] = true;
        if (gender) options.where['gender'] = gender;
        if (locale) options.where['locale'] = locale;
        if (length) options.take = length;
        if (offset) options.skip = offset;
        return await User.find(options);
    },
    isCreated: async userId => {
        return !!await User.findOne(userId);
    },
    isNeedLove: async userId => {
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        return user.needLove;
    },
    isChattingWith: async userId => {
        const user = await User.findOne(userId, {relations: ['chattingWith']});
        if (!user) throw new Error('User not found.');
        return !!user.chattingWith;
    },
    isChattingWithNeedLove: async userId => {
        const user = await User.findOne(userId, {relations: ['chattingWith']});
        if (!user) throw new Error('User not found.');
        return !!user.chattingWith && user.needLove;
    },
    addChatWith: async (userId, chatWithId) => {
        const chatWithUser = await User.findOne(chatWithId);
        if (!chatWithUser) throw new Error('User to chat with not found.');
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        if (user.chattingWith || chatWithUser.chattingWith)
            throw new Error('User is chatting with another user. Can\'t add new one.');
        user.chattingWith = chatWithUser;
        chatWithUser.chattingWith = user;
        return await user.save();
    },
    needLove: async userId => {
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        user.needLove = true;
        await user.save();
    },
    notNeedLove: async userId => {
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        user.needLove = false;
        await user.save();
    },
    removeChatWith: async (userId) => {
        const user = await User.findOne(userId, {relations: ['chattingWith']});
        if (!user) throw new Error('User not found.');
        const result = user.chattingWith.userId;
        user.chattingWith = null;
        await user.save();
        return result;
    },
    removePicture: async userId => {
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        const userPicture = await UserPictureController.getCurrentUserPicture(userId);
        if(!userPicture) throw new Error('NO_PICTURE');
        await UserPictureController.disablePicture(userId, userPicture.attachmentId);
    }
};

export {userController as UserController}
