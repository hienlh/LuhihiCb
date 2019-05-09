import {expect} from 'chai';
import request from 'supertest';
import app from '../src/';

describe('Unit testing the root route', function () {

    it('should return OK status', function () {
        return request(app)
            .get('/')
            .expect(200);
    });

    it('should return message on rendering', function () {
        return request(app)
            .get('/')
            .expect((res) => {
                expect(res.text).to.contain('Connect success!')
            })
    });

});
