// @flow

import path from 'path';
import debug from 'debug';
import express from 'express';
import history from 'connect-history-api-fallback';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

// import routes
import apiTest from './routes/apiTest';
import apiNotExists from './routes/apiNotExists';

// create express app
const app = express();

// add middlewares
app.use(compression());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// add API routes
app.use('/api', apiTest);
app.use('/api', apiNotExists);

// add static middleware to serve static files
app.use(history({ verbose: true, logger: debug('myapp:history') }));
app.use(express.static(path.join(__dirname, '../', 'public')));

export default app;
