import UserService from './users.service.js';

const service = new UserService();

export async function index(req, res, next) {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  const data = req.body;
  try {
    const users = await service.create(data);
    res.json(users);
  } catch (error) {
    next(error);
  }
}
