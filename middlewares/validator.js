import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
ajvFormats(ajv, { formats: ['email'] });

export function validator(schema) {
  return (req, res, next) => {
    const validate = ajv.compile(schema);
    const data = req.body;
    const valid = validate(data);
    if (!valid) {
      next(validate.errors);
    }
    next();
  };
}
