import TokenService from '../token/token.service.js';

const tokenService = new TokenService();

export function login(req, res, next) {
  try {
    const { dataValues } = req.user;
    const payload = {
      id: dataValues.id,
      name: dataValues.name,
      lastname: dataValues.lastname
    };
    const token = tokenService.create(payload);

    res.json({
      user: payload,
      token
    });
  } catch (error) {
    next(error);
  }
}
