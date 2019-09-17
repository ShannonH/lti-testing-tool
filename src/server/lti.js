import * as lti from 'ims-lti';
import { redisClient } from '../server/redis';

const store = new lti.Stores.RedisStore('consumer_key', redisClient);

const app_key = 'key';
const app_secret = 'secret';

export function validate(req) {
  const provider = new lti.Provider(app_key, app_secret, store);
  provider.valid_request(req, (err, isValid) => {
    if (isValid) {
      console.log('yes');
      return true;
    }
    if (isValid !== true) {
      console.log('no');
      return false;
    }
  });
}
