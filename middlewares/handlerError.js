export function logError(err, req, res, next) {
  console.log(err);
  next(err);
}

export function showError(err, req, res, next) {
  res.json(err);
}
