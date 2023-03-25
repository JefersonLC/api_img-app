import { Router } from 'express';
import * as UserController from './users.controller.js';

const userRouter = Router();

userRouter.get('/', UserController.index);
userRouter.post('/', UserController.create);

export default userRouter;