import {FbMessAPI} from '../../framework/fbMessAPI';
import {addChat} from '../handleChatting/addChat';
import {cancelChat} from '../handleChatting/cancelChat';
import {matchUser, needLove} from '../handleNeedLove/needLove';
import {acceptRequest, getAllRequest} from '../handleRequest/handleRequest';
import {RandomPicture, ViewUserPicture} from '../handleResponse/responsePicture';
import {SendLove} from '../handleRequest/sendLove';
import {Postbacks} from '../../helper/postbacks';
import {updateUser} from '../handleSender/saveUser';
import {getStarted} from './getStarted';
import {removePicture} from './removePicture';

export const handlePostback = (senderId: string, payload: any) => {
    // Set the response based on the postback payload
    if (payload === Postbacks.GetStarted) {
        getStarted(senderId).then(() => console.log('Sent welcome.'));
    } else if (payload === Postbacks.ViewPicture) {
        RandomPicture(senderId).then(() => console.log('Sent random picture.'));
    } else if (payload === Postbacks.ViewMyPicture) {
        ViewUserPicture(senderId).then(() => console.log('Sent user picture.'));
    } else if (payload.includes(Postbacks.Love)) {
        const loveId = payload.split('_')[1];
        SendLove(senderId, loveId).then(() => console.log('Sent love.'));
    } else if (payload.includes(Postbacks.Accept)) {
        const acceptId = payload.split('_')[1];
        acceptRequest(acceptId, senderId).then(() => console.log('Accepted request.'));
    } else if (payload.includes(Postbacks.ViewRequests)) {
        const page = payload.split('_')[1];
        getAllRequest(senderId, page).then(() => console.log('Sent list request.'));
    } else if (payload === Postbacks.CancelChat) {
        cancelChat(senderId).then()
    } else if (payload === Postbacks.RequestFacebook) {
        FbMessAPI.sendText(senderId, 'Tính năng đang phát triển!')
    } else if (payload === Postbacks.RemovePicture){
        removePicture(senderId).then(() => {
            FbMessAPI.sendText(senderId, 'Đã xoá hình của bạn. Người khác sẽ không thể ' +
                'tìm thấy bạn cho đến khi bạn có hình mới.');
        })
    } else if (payload === Postbacks.NeedLove) {
        needLove(senderId).then(() => {
            matchUser(senderId).then((user) => {
                if(!user)
                    FbMessAPI.sendText(senderId, 'Chúng tôi đang mang thính của bạn đi ' +
                        'rải khắp nhân gian. Hãy đợi tin tốt nhé!');
                else {
                    addChat(senderId, user.userId).then(()=>{
                        FbMessAPI.sendText(senderId, 'Đã có người đớp thính của bạn. Chào người đó đi nào!');
                        FbMessAPI.sendText(user.userId, 'Đã có người đớp thính của bạn. Chào người đó đi nào!');
                    });
                }
            })
        });
    } else if (payload === Postbacks.UpdateProfile) {
        updateUser(senderId);
    }
};
