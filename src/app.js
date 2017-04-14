// @flow

import fs from 'fs';
import path from 'path';
import debug from 'debug';
import express from 'express';
import history from 'connect-history-api-fallback';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

// import routes
import { logsLogger, logsErrorLogger, logsServe } from './routes/appLogs';
import apiTest from './routes/apiTest';
import apiNotExists from './routes/apiNotExists';

// create express app
const app = express();

// add middlewares
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// create logs directory if it doesn't exists
if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

// requests logging
app.use(logsLogger);

// add API routes
app.use('/api', apiTest);
app.use('/api', apiNotExists);

// serve logs files
app.use(logsServe);

// add static middleware to serve static files
app.use(history({ verbose: true, logger: debug('myapp:history') }));
app.use(express.static(path.join(__dirname, '../', 'public')));

// error logging
app.use(logsErrorLogger);

export default app;
