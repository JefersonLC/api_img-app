import sequelize from '../../database/connection.js';

const { models } = sequelize;

export default class UserService {
  async findAll() {
    const users = await models.User.findAll();
    return users;
  }

  async create(body, token) {
    const data = Object.assign(body, { token });
    const modifiedUser = await models.User.create(data);
    return modifiedUser;
  }
}
