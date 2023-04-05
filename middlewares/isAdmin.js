import boom from '@hapi/boom';

export function isAdmin(req, res, next) {
  const { isAdmin } = req.user;
  try {
    if (!isAdmin) throw boom.unauthorized('Only administrators');
    else next();
  } catch (error) {
    next(error);
  }
}
