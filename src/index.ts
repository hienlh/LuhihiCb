import config from './configuration'
import {InitializeChatbot} from './initializeChatbot';
import mainRouter from './router';

const app = config();

InitializeChatbot();

app.use(mainRouter);

export default app;
