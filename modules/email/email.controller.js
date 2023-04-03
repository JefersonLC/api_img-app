import UserService from '../users/users.service.js';

const userService = new UserService();

export async function verify(req, res, next) {
  const { token } = req.query;
  try {
    const user = await userService.findByToken(token);
    const verifiedUser = await userService.changeVerifiedStatus(user);
    res.json(verifiedUser);
  } catch (error) {
    next(error);
  }
}
