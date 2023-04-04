import { EmptyResultError } from 'sequelize';
import sequelize from '../../database/connection.js';

const { models } = sequelize;

export default class UserService {
  ifUserDoesNotExist({ user, message }) {
    if (!user) {
      const error = new EmptyResultError('User not found');
      error.error = error.message;
      error.message = message;
      throw error;
    }
  }

  async findAll() {
    const users = await models.User.findAll({
      attributes: { exclude: ['password', 'token'] }
    });
    return users;
  }

  async create(body, token) {
    const data = Object.assign(body, { token });
    const newUser = await models.User.create(data);
    return newUser;
  }

  async findById(id) {
    const user = await models.User.findByPk(id, {
      attributes: { exclude: ['password', 'token'] }
    });
    this.ifUserDoesNotExist({
      user,
      message: 'Id you entered does not exist'
    });
    return user;
  }

  async remove(id) {
    const user = await this.findById(id);
    await user.destroy();
  }

  async findByToken(token) {
    if (!token) throw new Error('Token not found');
    const user = await models.User.findOne({
      where: {
        token
      }
    });
    this.ifUserDoesNotExist({
      user,
      message: 'Token you entered does not exist'
    });
    return user;
  }

  async changeVerifiedStatus(user) {
    const verifiedUser = await user.update({
      isVerified: true
    });
    return verifiedUser;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: {
        email
      },
      attributes: { exclude: ['token'] }
    });
    this.ifUserDoesNotExist({
      user,
      message: 'Email you entered does not exist'
    });
    return user;
  }
}
