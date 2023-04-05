import boom from '@hapi/boom';
import sequelize from '../../database/connection.js';

const { models } = sequelize;

export default class UserService {
  /**
   * Lanza un error 404. Usado cuando el usuario devuelto
   * por otro metodo de la clase UserService es null
   * @return {void}
   */
  ifUserDoesNotExist() {
    throw boom.notFound('User not found');
  }

  /**
   * Devuelve una lista de usuarios
   * @return {Promise<User[]>}
   */
  async findAll() {
    const users = await models.User.findAll({
      attributes: { exclude: ['password', 'token'] }
    });
    return users;
  }

  /**
   * Crea un nuevo usuario
   * @param {{id:string, name:string, lastname:string, age:number, email:string, password:string}} body Cuerpo de la request
   * @param token Token generado
   * @return {Promise<User>}
   */
  async create(body, token) {
    const data = Object.assign(body, { token });
    const newUser = await models.User.create(data);
    return newUser;
  }

  /**
   * Busca un usuario por su id y lo devuelve
   * @param {string} id ID del usuario
   * @return {Promise<User|null>}
   */
  async findById(id) {
    const user = await models.User.findByPk(id, {
      attributes: { exclude: ['password', 'token'] },
      include: ['images']
    });
    return user;
  }

  /**
   * Busca un usuario por su token y lo devuelve.
   * Si el token no existe lanza un error
   * @param {string} token
   * @return {Promise<{User}|null>}
   */
  async findByToken(token) {
    if (!token) throw boom.notFound('Token not found');
    const user = await models.User.findOne({
      where: { token }
    });
    return user;
  }

  /**
   * Cambia la propiedad 'isVerified' de un usuario a 'true'
   * @param {Promise<User>} user
   */
  async changeVerifiedStatus(user) {
    const verifiedUser = await user.update({
      isVerified: true
    });
    return verifiedUser;
  }

  /**
   * Busca un usuario por su email y lo devuelve.
   * @param {string} email
   * @return {Promise<User | null>}
   */
  async findByEmail(email) {
    const user = await models.User.findOne({
      where: {
        email
      },
      attributes: { exclude: ['token'] }
    });
    return user;
  }

  /**
   * Busca un usuario por su id y lo elimina en caso de que no sea null
   * @param {string} id
   * @return {void}
   */
  async remove(id) {
    const user = await this.findById(id);
    if (!user) this.ifUserDoesNotExist();
    await user.destroy();
  }

  async update(id, data) {
    const user = await this.findById(id);
    if (!user) this.ifUserDoesNotExist();
    const modifiedUser = await user.update(data);
    return modifiedUser;
  }
}
