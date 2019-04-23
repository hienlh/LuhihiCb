import assert from 'assert';
import {expect} from 'chai';
import request from 'supertest';
import {app} from '../app';

describe('Unit testing the /home route', function () {

    it('should return OK status', function () {
        return request(app)
            .get('/')
            .then((response) => {
                assert.strictEqual(response.status, 200)
            })
    });

    it('should return message on rendering', function () {
        return request(app)
            .get('/')
            .then((response) => {
                expect(response.text).to.contain('Connect success!');
            })
    });

});
