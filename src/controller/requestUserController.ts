import {RequestUser} from '../entity/RequestUser';

export interface IRequestUserController {
    addRequestUser: (userId: string, userRequestId: string) => Promise<RequestUser>;
    deleteRequestUser: (userId: string, userRequestId: string) => Promise<void>;
    acceptRequestUser: (userId: string, userRequestId: string) => Promise<RequestUser>;
    getAllRequestOfUser: (userId: string, length?: number, offset?: number) => Promise<RequestUser[]>;
    getAllRequestOfUserWithAccept: (userId: string, accept: boolean, length?: number, offset?: number) => Promise<RequestUser[]>;
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
    acceptRequestUser: async (userId, userRequestId) => {
        const request = await RequestUser.findOne({userId, userRequestId});
        if (!request) throw new Error('Request not found.');
        request.accept = true;
        return await request.save();
    },
    getAll: async (length?, offset?) => {
        return await RequestUser.find({take: length, skip: offset});
    },
    getAllRequestOfUser: async (userId, length?, offset?) => {
        return await RequestUser.find({where: {userId}, skip: offset, take: length});
    },
    getAllRequestOfUserWithAccept: async (userId, accept, length?, offset?) => {
        return await RequestUser.find({where: {userId, accept}, skip: offset, take: length});
    }
};

export {requestUserController as RequestUserController}
