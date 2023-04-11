import { Router } from 'express';
import loginRouter from './login/login.module.js';
import userRouter from './users/users.module.js';
import emailRouter from './email/email.module.js';
import imageRouter from './images/images.module.js';

const router = Router();

router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/email', emailRouter);
router.use('/images', imageRouter);

export default router;
