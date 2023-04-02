import express from 'express';
import cors from 'cors';
import config from './config/environment.js';
import router from './modules/app.module.js';
import { logError, showError } from './middlewares/handlerError.js';

const app = express();

app.listen(config.PORT);

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(logError);
app.use(showError);

export default app;
