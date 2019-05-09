import {FindManyOptions} from 'typeorm';
import {User} from "../entity/User";

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
    isCreated: (userId: string) => Promise<boolean>;
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
        const user = await User.findOne(userId);
        if (!user) throw new Error('User not found.');
        return user;
    },
    getAllUser: async (length?: number, offset?: number) => {
        return await User.find({take: length, skip: offset});
    },
    getUsersBy: async (name?: string, gender?: string, locale?: string, length?: number, offset?: number) => {
        let options: FindManyOptions = {};
        if (name) options.where['name'] = name;
        if (gender) options.where['gender'] = gender;
        if (locale) options.where['name'] = locale;
        if (length) options.take = length;
        if (offset) options.skip = offset;
        return await User.find(options);
    },
    isCreated: async userId => {
        return !!await User.findOne(userId);
    }
};

export {userController as UserController}
