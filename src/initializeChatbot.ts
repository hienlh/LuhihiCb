import {FbMessAPI} from './framework/fbMessAPI';
import {Nested, Postback} from './framework/model';
import {Postbacks} from './helper/postbacks';

export const InitializeChatbot = () => {
    return;
    FbMessAPI.setGreeting([{locale: 'default', text: 'Chào mừng bạn đến với Luhihi Chatbot!'}]);
    FbMessAPI.setGetStarted(Postbacks.GetStarted).then(() => console.log('Set Get Started success.'));
    FbMessAPI.setPersistentMenu([
        new Nested('Chức năng chính', [
            new Postback('Xem hình', Postbacks.ViewPicture),
            new Postback('Thả thính ♥♡♥', Postbacks.NeedLove)
        ]),
        new Nested('Nhắn tin', [
            new Postback('Dừng nhắn tin', Postbacks.CancelChat),
            new Postback('Xin facebook', Postbacks.RequestFacebook)
        ]),
        new Nested('Khác', [
            new Postback('Ai thích hình của tôi?', Postbacks.ViewRequests + 0),
            new Postback('Xem hình của tôi', Postbacks.ViewMyPicture),
            new Postback('Xoá hình của tôi', Postbacks.RemovePicture),
            new Postback('Cập nhật profile', Postbacks.UpdateProfile)
        ])
    ]).then(() => console.log('Set persistent menu success'));
}
