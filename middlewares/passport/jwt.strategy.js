import { Strategy, ExtractJwt } from 'passport-jwt';
import env from '../../config/environment.js';

export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.SECRET
  },
  (payload, done) => {
    return done(null, payload);
  }
);
