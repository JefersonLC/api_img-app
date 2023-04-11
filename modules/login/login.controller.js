import TokenService from '../token/token.service.js';

const tokenService = new TokenService();

export function login(req, res, next) {
  try {
    const { dataValues } = req.user;
    const payload = {
      id: dataValues.id,
      isAdmin: dataValues.isAdmin
    };
    const token = tokenService.create(payload);

    res.json({ accessToken: token });
  } catch (error) {
    next(error);
  }
}
