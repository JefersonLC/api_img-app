import { Router } from 'express';
import * as LoginController from './login.controller.js';
import passport from 'passport';

const loginRouter = Router();

loginRouter.post(
  '/',
  passport.authenticate('local', { session: false }),
  LoginController.login
);

export default loginRouter;
