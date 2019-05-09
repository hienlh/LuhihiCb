import {RequestUser} from '../entity/RequestUser';

export interface IRequestUserController {
    addRequestUser: (userId: string, userRequestId: string) => Promise<RequestUser>;
    deleteRequestUser: (userId: string, userRequestId: string) => Promise<void>;
    getAllRequestOfUser: (userId: string, length?: number, offset?: number) => Promise<RequestUser[]>;
    getRequest: (userId: string, userRequestId: string) => Promise<RequestUser>;
    getAll: (length?: number, offset?: number) => Promise<RequestUser[]>;
}

const requestUserController: IRequestUserController = {
    addRequestUser: async (userId, userRequestId) => {
        if (await RequestUser.findOne({userId, userRequestId})) throw new Error('Request existed.');
        const request = new RequestUser();
        request.userRequestId = userRequestId;
        request.userId = userId;
        return await request.save();
    },
    deleteRequestUser: async (userId, userRequestId) => {
        const request = await RequestUser.findOne({userId, userRequestId});
        if (!request) throw new Error('Request not found.');
        await request.remove();
    },
    getAll: async (length?, offset?) => {
        return await RequestUser.find({take: length, skip: offset});
    },
    getAllRequestOfUser: async (userId, length?, offset?) => {
        return await RequestUser.find({where: {userRequestId: userId}, skip: offset, take: length, relations: ['user', 'userRequest']});
    },
    getRequest: async (userId, userRequestId) => {
        return await RequestUser.findOne({userId, userRequestId});
    }
};

export {requestUserController as RequestUserController}
