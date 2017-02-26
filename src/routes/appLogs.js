// @flow

import path from 'path';
import express, { Router } from 'express';
import serveIndex from 'serve-index';
import winston from 'winston';
import expressWinston from 'express-winston';
import basicauth from 'basicauth-middleware';
import sha1 from 'sha1';

// requests logger
const logsLogger = expressWinston.logger({
    transports: [new winston.transports.File({
        filename: './logs/logs-logger.log',
        maxsize: 2000000,
        maxFiles: 5
    })]
});

// error logger
const logsErrorLogger = expressWinston.errorLogger({
    transports: [new winston.transports.File({
        filename: './logs/logs-error-logger.log',
        maxsize: 2000000,
        maxFiles: 5
    })]
});

// serve logs files
const logsServe = Router();

logsServe.use('/logs',
    basicauth((username: string, password: string): boolean => (
        username === process.env.LOGS_USERNAME && sha1(password) === process.env.LOGS_PASSWORD
    )),
    express.static(path.join(__dirname, '../../', 'logs')),
    serveIndex(path.join(__dirname, '../../', 'logs'), { icons: true })
);

export {
    logsLogger,
    logsErrorLogger,
    logsServe
};
