import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

export default function config() {
    dotenv.config();

    const app = express();

    app.use(express.static('src/public'));

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    return app;
}
