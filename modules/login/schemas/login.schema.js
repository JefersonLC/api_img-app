export const loginSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email'
    },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 24
    }
  },
  required: ['email', 'password'],
  additionalProperties: false
};
