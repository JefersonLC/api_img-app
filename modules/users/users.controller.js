import UserService from './users.service.js';
import TokenService from '../token/token.service.js';
import EmailService from '../email/email.service.js';

const userService = new UserService();
const tokenService = new TokenService();
const emailService = new EmailService();

export async function index(req, res, next) {
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  const body = req.body;
  const payload = {
    id: body.id,
    name: body.name,
    lastname: body.lastname,
    email: body.email
  };

  try {
    const token = tokenService.create(payload);
    const newUser = await userService.create(body, token);
    await emailService.sendEmailtoVerify(token, newUser.email);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
}
