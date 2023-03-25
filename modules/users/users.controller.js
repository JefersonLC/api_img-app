import sequelize from '../../database/connection.js';
import UserService from './users.service.js';

const service = new UserService();

export async function index(req, res) {
  const resp = await sequelize.models.User.findAll();
  res.json(resp);
}

export async function create(req, res) {
  const body = req.body;
  const resp = await sequelize.models.User.create(body);
  res.json(resp);
}
