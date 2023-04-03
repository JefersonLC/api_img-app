import { Router } from 'express';
import * as EmailController from './email.controller.js';

const emailRouter = Router();

emailRouter.get('/verify', EmailController.verify);

export default emailRouter;
