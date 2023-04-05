import { UniqueConstraintError } from 'sequelize';

export function logError(err, req, res, next) {
  console.log(err);
  next(err);
}

export function uniqueConstraintError(err, req, res, next) {
  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({
      name: err.name,
      errors: err.errors.map((error) => ({
        message: error.message,
        type: error.type,
        value: error.value
      }))
    });
  }
  next(err);
}

export function syntaxError(err, req, res, next) {
  if (err instanceof SyntaxError) {
    return res.status(400).json(err);
  }
  next(err);
}

export function boomError(err, req, res, next) {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json({
      status: err.output.statusCode,
      message: err.output.payload.message,
      error: err.output.payload.error
    });
  }
  next(err);
}

export function showError(err, req, res, next) {
  return res.json(err);
}
