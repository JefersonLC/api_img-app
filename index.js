import express from 'express';
import cors from 'cors';
import passport from 'passport';
import env from './config/environment.js';
import router from './modules/app.module.js';
import * as Handler from './middlewares/handlerError.js';
import { localStrategy } from './middlewares/passport/local.strategy.js';
import { jwtStrategy } from './middlewares/passport/jwt.strategy.js';

const app = express();

app.listen(env.PORT);

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api', router);

app.use(Handler.logError);
app.use(Handler.uniqueConstraintError);
app.use(Handler.syntaxError);
app.use(Handler.boomError);
app.use(Handler.showError);

export default app;
