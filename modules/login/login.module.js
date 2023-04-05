import { Router } from 'express';
import passport from 'passport';
import * as LoginController from './login.controller.js';
import { validator } from '../../middlewares/validator.js';
import { loginSchema } from './schemas/login.schema.js';

const loginRouter = Router();

loginRouter.post(
  '/',
  validator(loginSchema),
  passport.authenticate('local', { session: false }),
  LoginController.login
);

export default loginRouter;
