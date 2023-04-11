import { Sequelize } from 'sequelize';
import options from '../config/database.options.js';
import * as User from '../modules/users/models/user.model.js';
import * as Image from '../modules/images/models/image.model.js';

const sequelize = new Sequelize(options);

const UserModel = sequelize.define(
  User.Model,
  User.ModelAttributes,
  User.ModelOptions
);
const ImageModel = sequelize.define(
  Image.Model,
  Image.ModelAttributes,
  Image.ModelOptions
);

UserModel.hasMany(ImageModel, {
  as: 'images'
});

ImageModel.belongsTo(UserModel, {
  as: 'user'
});

export default sequelize;
