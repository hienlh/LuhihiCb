import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

export default function config() {
    dotenv.config();

    const app = express();

    app.use(express.static('src/public'));

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    return app;
}
