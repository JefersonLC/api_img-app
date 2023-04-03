import { Router } from 'express';
import userRouter from './users/users.module.js';
import emailRouter from './email/email.module.js';

const router = Router();

router.use('/users', userRouter);
router.use('/email', emailRouter);

export default router;
