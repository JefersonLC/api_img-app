import { Router } from 'express';
import passport from 'passport';
import { upload } from '../../config/multer.js';
import { validator } from '../../middlewares/validator.js';
import * as ImageController from './images.controller.js';
import { createSchema } from './schemas/create.schema.js';
// import { isAdmin } from '../../middlewares/isAdmin.js';
// import { updateSchema } from './schemas/update.schema.js';

const imageRouter = Router();

imageRouter
  .route('/')
  .get(ImageController.index)
  .post(
    passport.authenticate('jwt', { session: false }),
    upload.single('image'),
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

export default imageRouter;
