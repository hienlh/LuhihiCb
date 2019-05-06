import config from './configuration'
import mainRouter from './router';

const app = config();

app.use(mainRouter);

export default app;
