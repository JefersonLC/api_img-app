import { Router } from 'express';
import * as UserController from './users.controller.js';
import { validator } from '../../middlewares/validator.js';
import { createSchema } from './schemas/create.schema.js';
import passport from 'passport';

const userRouter = Router();

userRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  UserController.index
);

userRouter.post('/', validator(createSchema), UserController.create);

userRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  UserController.getUser
);

userRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  UserController.remove
);

export default userRouter;
