import 'babel-polyfill';

import debug from 'debug';
import http from 'http';

import app from '../app';

app.set('port', process.env.PORT || 5000);

var log = debug('myapp:server');

var server = http.createServer(app);

server.on('listening', () => {
    var addr = server.address(),
        bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    log('Listening on ' + bind);
});

server.listen(app.get('port'));
