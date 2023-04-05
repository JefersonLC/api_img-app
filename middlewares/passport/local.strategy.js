import { Strategy } from 'passport-local';
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import UserService from '../../modules/users/users.service.js';

const userService = new UserService();

export const localStrategy = new Strategy(
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
