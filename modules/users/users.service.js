import { EmptyResultError } from 'sequelize';
import sequelize from '../../database/connection.js';

const { models } = sequelize;

export default class UserService {
  async findAll() {
    const users = await models.User.findAll();
    return users;
  }

  async create(body, token) {
    const data = Object.assign(body, { token });
    const newUser = await models.User.create(data);
    return newUser;
  }

  async findByToken(token) {
    if (!token) throw new Error('Token not found');
    const user = await models.User.findOne({
      where: {
        token
      }
    });
    if (!user) {
      const error = new EmptyResultError('User not found');
      error.error = error.message;
      error.message = 'Token you entered does not exist';
      throw error;
    }
    return user;
  }

  async changeVerifiedStatus(user) {
    const verifiedUser = await user.update({
      isVerified: true
    });
    return verifiedUser;
  }
}
