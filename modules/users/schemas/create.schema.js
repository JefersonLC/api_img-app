export const createSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', minLength: 2, maxLength: 100 },
    name: { type: 'string', minLength: 2, maxLength: 100 },
    lastname: { type: 'string', minLength: 2, maxLength: 100 },
    age: { type: 'integer', minimum: 14},
    email: { type: 'string', format: 'email' }
  },
  required: ['id', 'name', 'lastname', 'age', 'email'],
  additionalProperties: false
};
