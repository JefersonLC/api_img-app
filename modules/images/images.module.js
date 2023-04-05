import { Router } from 'express';
import passport from 'passport';
import * as ImageController from './images.controller.js';
import { validator } from '../../middlewares/validator.js';
// import { isAdmin } from '../../middlewares/isAdmin.js';
import { createSchema } from './schemas/create.schema.js';
// import { updateSchema } from './schemas/update.schema.js';

const userRouter = Router();

userRouter
  .route('/')
  .get(ImageController.index)
  .post(
    passport.authenticate('jwt', { session: false }),
    validator(createSchema),
    ImageController.create
  );

// userRouter
//   .route('/:id')
//   .all(passport.authenticate('jwt', { session: false }))
//   .patch(validator(updateSchema), UserController.update)
//   .all(isAdmin)
//   .get(UserController.getUser)
//   .post(UserController.remove);

export default userRouter;
