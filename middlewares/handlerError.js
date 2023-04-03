import { EmptyResultError, UniqueConstraintError } from 'sequelize';

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

export function expectedTokenError(err, req, res, next) {
  if (err instanceof Error) {
    return res.status(404).json({
      name: err.name,
      message: err.message
    });
  }
  next(err);
}

export function emptyResultError(err, req, res, next) {
  if (err instanceof EmptyResultError) {
    return res.status(404).json({
      name: err.name,
      error: err.error,
      message: err.message
    });
  }
  next(err);
}

export function showError(err, req, res, next) {
  return res.json(err);
}
