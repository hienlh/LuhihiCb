import * as http from 'http';
import {createConnection} from 'typeorm';
import application from './src';

const PORT = process.env.PORT || 8000;

const server = http.createServer(application);

createConnection().then(async () => {

}).catch((error) => console.log(error));

server.listen(PORT, () => {
    console.log("Server listening on " + PORT);
});
