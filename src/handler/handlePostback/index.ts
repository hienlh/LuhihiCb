import {cancelChat} from '../handleChatting/cancelChat';
import {acceptRequest, getAllRequest} from '../handleRequest/handleRequest';
import {RandomPicture, ViewUserPicture} from '../handleResponse/responsePicture';
import {SendLove} from '../handleRequest/sendLove';
import {Postbacks} from '../../helper/postbacks';

export const handlePostback = (senderId: string, payload: any) => {
    // Set the response based on the postback payload
    if (payload === Postbacks.ViewPicture) {
        RandomPicture(senderId).then(() => console.log('Sent random picture.'));
    } else if (payload === Postbacks.ViewMyPicture) {
        ViewUserPicture(senderId).then(() => console.log('Sent user picture.'));
    } else if (payload.includes(Postbacks.Love)) {
        const loveId = payload.split('_')[1];
        SendLove(senderId, loveId).then(() => console.log('Sent love.'));
    } else if (payload.includes(Postbacks.Accept)) {
        const acceptId = payload.split('_')[1];
        acceptRequest(acceptId, senderId).then(() => console.log('Accepted request.'));
    } else if (payload.includes(Postbacks.ViewRequests)){
        const page = payload.split('_')[1];
        getAllRequest(senderId, page).then(() => console.log('Sent list request.'));
    } else if (payload === Postbacks.CancelChat) {
        cancelChat(senderId).then()
    }
};
