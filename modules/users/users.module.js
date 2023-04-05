import { Router } from 'express';
import passport from 'passport';
import * as UserController from './users.controller.js';
import { validator } from '../../middlewares/validator.js';
import { isAdmin } from '../../middlewares/isAdmin.js';
import { createSchema } from './schemas/create.schema.js';
import { updateSchema } from './schemas/update.schema.js';

const userRouter = Router();

userRouter
  .route('/')
  .get(
    passport.authenticate('jwt', { session: false }),
    isAdmin,
    UserController.index
  )
  .post(validator(createSchema), UserController.create);

userRouter
  .route('/:id')
  .all(passport.authenticate('jwt', { session: false }))
  .patch(validator(updateSchema), UserController.update)
  .all(isAdmin)
  .get(UserController.getUser)
  .post(UserController.remove);

export default userRouter;
