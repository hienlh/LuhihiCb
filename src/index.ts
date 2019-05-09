import config from './configuration'
import {FbMessAPI} from './framework/FbMessAPI';
import {Nested, Postback} from './framework/model';
import {Postbacks} from './helper/postbacks';
import mainRouter from './router';

const app = config();


// FbMessAPI.setGreeting([{locale: 'default', text: 'Chào mừng bạn đến với Luhihi Chatbot!'}]);
// FbMessAPI.setGetStarted(Postbacks.GetStarted).then(() => console.log('Set Get Started success.'));
// FbMessAPI.setPersistentMenu([
//     new Nested('Xem hình', [
//         new Postback('Ngẫu nhiên', Postbacks.ViewPicture),
//         new Postback('Xem hình của tôi', Postbacks.ViewMyPicture),
//     ]),
//     new Postback('Ai thích hình của tôi?', Postbacks.ViewRequests + 0),
//     new Nested('Nhắn tin', [
//         new Postback('Dừng nhắn tin', Postbacks.CancelChat),
//         new Postback('Xin facebook', Postbacks.RequestFacebook)
//     ]),
// ]).then(() => console.log('Set persistent menu success'));

app.use(mainRouter);

export default app;
