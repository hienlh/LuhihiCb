import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import serverRoute from './src/routes';

export const app = express();

app.use(express.static('src/public'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

serverRoute(app);
