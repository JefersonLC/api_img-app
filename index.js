import express from 'express';
import cors from 'cors';
import passport from 'passport';
import env from './config/environment.js';
import router from './modules/app.module.js';
import * as Handler from './middlewares/handlerError.js';
import { jwtStrategy, localStrategy } from './config/auth.js';

const app = express();

app.listen(env.PORT);

app.use(cors());
app.use('/public', express.static('public'));
app.use(express.json());

app.use(passport.initialize());

passport.use(jwtStrategy);
passport.use(localStrategy);

app.use('/api', router);

app.use(Handler.logError);
app.use(Handler.multerError);
app.use(Handler.uniqueConstraintError);
app.use(Handler.syntaxError);
app.use(Handler.boomError);
app.use(Handler.showError);

export default app;
