// @flow

import request from 'supertest';
import app from '../src/app';

describe('Express server', () => {
    it('should return status code 200 when requesting GET /', (done: Function) => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('should return `Hello from test API` when requesting GET /api/test', (done: Function) => {
        request(app)
            .get('/api/test')
            .expect(200)
            .expect('Hello from test API', done);
    });

    it('should return `API does not exist` when requesting GET /api/invalidendpoint', (done: Function) => {
        request(app)
            .get('/api/invalidendpoint')
            .expect(404)
            .expect('API does not exist', done);
    });
});
