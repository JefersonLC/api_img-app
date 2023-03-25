import express from 'express';
import cors from 'cors';
import config from './config/environment.js';
import router from './modules/app.module.js';

const app = express();

app.listen(config.PORT);

app.use(cors());
app.use(express.json());
app.use('/api', router);

export default app;
