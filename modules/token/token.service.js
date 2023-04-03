import jwt from 'jsonwebtoken';
import env from '../../config/environment.js';

export default class TokenService {
  create(payload) {
    const secret = env.SECRET;
    const options = { expiresIn: '7d' };
    const token = jwt.sign(payload, secret, options);
    return token;
  }
}
