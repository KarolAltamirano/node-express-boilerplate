import http from 'http';
import dotenv from 'dotenv';
import debug from 'debug';

import app from '../app';

// load environment variables from a .env file
dotenv.config();

// set port from environment
app.set('port', process.env.PORT || 5000);

// create logger
const log = debug('myapp:server');

// create HTTP server
const server = http.createServer(app);

// set HTTP server event listener
server.on('listening', () => {
  log(`Listening on port ${app.get('port').toString()}`);
});

// start listening on provided port
server.listen(app.get('port'));
