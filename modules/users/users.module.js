import { Router } from 'express';
import * as UserController from './users.controller.js';
import { validator } from '../../middlewares/validator.js';
import { createSchema } from './schemas/create.schema.js';

const userRouter = Router();

userRouter.get('/', UserController.index);
userRouter.post('/', validator(createSchema), UserController.create);

export default userRouter;
