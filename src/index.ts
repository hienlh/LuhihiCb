import config from './configuration'
import mainRouter from './router';

const app = config();

app.use(mainRouter);

app.get('*', (_req, res) => {
    res.status(200).send({
        message: 'Connect success!'
    })
});

export default app;
