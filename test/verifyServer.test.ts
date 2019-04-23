import request from 'supertest';
import app from '../src';
import RouterNames from '../src/helper/routerNames';

describe('Unit testing server verification', () => {
   it('should return OK status and message "CHALLENGE_ACCEPTED"', () => {
       return request(app)
           .get(RouterNames.server)
           .query({
               'hub.verify_token': process.env.VERIFICATION_TOKEN,
               'hub.challenge': 'CHALLENGE_ACCEPTED',
               'hub.mode': 'subscribe'
           })
           .expect(200)
           .expect('CHALLENGE_ACCEPTED');
   })
});
