import { Strategy } from 'passport-local';
import bcrypt from 'bcrypt';
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
      if (!user) return done(null, false);

      if (!bcrypt.compareSync(password, user.password))
        return done(null, false);

      if (!user.isVerified) return done(null, false);

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);
