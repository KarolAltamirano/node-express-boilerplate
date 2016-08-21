// @flow

import 'babel-polyfill';

import debug from 'debug';
import http from 'http';

import app from '../app';

// set port from environment
app.set('port', process.env.PORT || 5000);

// create logger
var log = debug('myapp:server');

// create HTTP server
var server = http.createServer(app);

// set HTTP server event listener
server.on('listening', () => {
    log(`Listening on port ${app.get('port')}`);
});

// start listening on provided port
server.listen(app.get('port'));
