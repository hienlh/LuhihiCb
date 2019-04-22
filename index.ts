import * as http from 'http';
import application from './src';

const PORT = process.env.PORT || 8000;

const server = http.createServer(application);

server.listen(PORT, () => {
    console.log("Server listening on " + PORT);
});
