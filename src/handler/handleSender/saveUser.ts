import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';

export const saveUser = (userId: string) => {
    UserController.isCreated(userId).then(isCreated => {
        if (!isCreated)
            FbMessAPI.getUserProfile(userId).then(fbUser => {
                FbMessAPI.createPersona(fbUser.name, fbUser.profile_pic).then((personaId) => {
                    UserController.saveUser(userId, personaId, fbUser.name, fbUser.gender,
                        fbUser.locale, fbUser.profile_pic)
                        .then(() => console.log('Saved user.'));
                }).catch(() => console.log('Create persona failed.'))
            });
    });
};

export const updateUser = (userId: string) => {
    FbMessAPI.getUserProfile(userId).then(fbUser => {
        // Xoá persona cũ trên facebook
        UserController.getUser(userId).then(user => {
            if(user && user.personaId)
                FbMessAPI.deletePersona(user.personaId).then();
        });
        // Tạo persona mới và gắn vô user
        FbMessAPI.createPersona(fbUser.name, fbUser.profile_pic).then((personaId) => {
            UserController.saveUser(userId, personaId, fbUser.name, fbUser.gender,
                fbUser.locale, fbUser.profile_pic)
                .then(() => FbMessAPI.sendText(userId, 'Đã cập nhật.'));
        }).catch(() => console.log('Create persona failed.'))
    });
};
