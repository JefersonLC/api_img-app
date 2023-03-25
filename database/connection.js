import { Sequelize } from 'sequelize';
import options from '../config/database.options.js';
import * as User from '../modules/users/models/user.model.js';

const sequelize = new Sequelize(options);

sequelize.define(User.Model, User.ModelAttributes, User.ModelOptions);

export default sequelize;
