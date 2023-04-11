import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import env from './environment.js';
import UserService from '../modules/users/users.service.js';

const userService = new UserService();

export const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await userService.findByEmail(email);

      if (!user) return done(boom.notFound('User not found'), false);

      if (!bcrypt.compareSync(password, user.password))
        return done(boom.badRequest('Incorret password'), false);

      if (!user.isVerified)
        return done(boom.unauthorized('Email not verified'), false);

      return done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

export const jwtStrategy = new JwtStrategy(
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
