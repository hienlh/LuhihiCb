import config from './configuration'
import {FbMessAPI} from './framework/FbMessAPI';
import {Postback} from './framework/model';
import {Postbacks} from './helper/postbacks';
import mainRouter from './router';

const app = config();


// FbMessAPI.setGreeting([{locale: 'default', text: 'Chào mừng bạn đến với Luhihi Chatbot!'}]);
// FbMessAPI.setGetStarted(Postbacks.GetStarted).then(() => console.log('Set Get Started success.'));
// FbMessAPI.setPersistentMenu([
//     new Postback('Xem hình', Postbacks.ViewPicture),
//     new Postback('Xem hình của tôi', Postbacks.ViewMyPicture),
//     new Postback('Ai thích hình của tôi?', Postbacks.ViewRequests + 0)
// ]).then(() => console.log('Set persistent menu success'));

app.use(mainRouter);

export default app;
