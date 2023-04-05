import { Strategy, ExtractJwt } from 'passport-jwt';
import boom from '@hapi/boom';
import UserService from '../../modules/users/users.service.js';
import env from '../../config/environment.js';

const userService = new UserService();

export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.SECRET
  },
  async (payload, done) => {
    try {
      const user = await userService.findById(payload.id);

      if (!user) return done(boom.notFound('User not found'), false);

      return done(null, payload);
    } catch (error) {
      done(error);
    }
  }
);
