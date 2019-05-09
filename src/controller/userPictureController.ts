import {User} from '../entity/User';
import {UserPicture} from '../entity/UserPicture';

export interface IUserPictureController {
    addUserPicture: (userId: string, attachmentId: string, date: Date) => Promise<UserPicture>;
    deleteUserPicture: (userId: string, attachmentId: string) => Promise<void>;
    getPicturesOfUser: (userId: string, length?: number, offset?: number) => Promise<UserPicture[]>;
    getCurrentUserPicture: (userId: string) => Promise<UserPicture>;
    getAllUserPicture: (length?: number, offset?: number) => Promise<UserPicture[]>;
    /**
     * Unselect all picture before, and select this picture.
     */
    selectPicture: (userId: string, attachmentId: string) => Promise<UserPicture>;
    getAllSelectedPicture: (length?: number, offset?: number) => Promise<UserPicture[]>;
}

const userPictureController: IUserPictureController = {
    addUserPicture: async (userId, attachmentId, date) => {
        if (await UserPicture.findOne({userId, attachmentId})) throw new Error('User picture existed.');
        const userPicture = new UserPicture();
        userPicture.userId = userId;
        userPicture.attachmentId = attachmentId;
        userPicture.date = date;
        userPicture.selected = false;
        return await userPicture.save();
    },
    deleteUserPicture: async (userId, attachmentId) => {
        const userPicture = await UserPicture.findOne({userId, attachmentId});
        if (!userPicture) throw new Error('User picture not found.');
        await userPicture.remove();
    },
    getPicturesOfUser: async (userId, length?, offset?) => {
        if (!await User.findOne(userId)) throw new Error('User not found.');
        return await UserPicture.find({where: {userId}, take: length, skip: offset});
    },
    getCurrentUserPicture: async userId => {
        return await UserPicture.findOne({where: {userId, selected: true}});
    },
    getAllUserPicture: async (length?, offset?) => {
        return await UserPicture.find({take: length, skip: offset});
    },
    selectPicture: async (userId, attachmentId) => {
        if (!await User.findOne(userId)) throw new Error('User not found.');
        const userPicture = await UserPicture.findOne({userId, attachmentId});
        if (!userPicture) throw new Error('User picture not found.');
        const selections = await UserPicture.find({where: {userId, selected: true}});
        for (const selection of selections) {
            selection.selected = false;
            await selection.save();
        }
        userPicture.selected = true;
        return await userPicture.save();
    },
    getAllSelectedPicture: async (length, offset) => {
        return await UserPicture.find({where: {selected: true}, take: length, skip: offset});
    }
};

export {userPictureController as UserPictureController}
