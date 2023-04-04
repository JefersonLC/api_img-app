import express from 'express';
import cors from 'cors';
import passport from 'passport';
import config from './config/environment.js';
import router from './modules/app.module.js';
import * as Handler from './middlewares/handlerError.js';
import { localStrategy } from './middlewares/passport/local.strategy.js';
import { jwtStrategy } from './middlewares/passport/jwt.strategy.js';

const app = express();

app.listen(config.PORT);

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api', router);

app.get('/verifyuser', (req, res) => {
  res.json({ user: req.user || null});
});

app.use(Handler.logError);
app.use(Handler.uniqueConstraintError);
app.use(Handler.syntaxError);
app.use(Handler.expectedTokenError);
app.use(Handler.emptyResultError);
app.use(Handler.showError);

export default app;
