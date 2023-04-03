const stringSchema = {
  type: 'string',
  minLength: 2,
  maxLength: 100
};

export const createSchema = {
  type: 'object',
  properties: {
    id: {
      allOf: [stringSchema]
    },
    name: {
      allOf: [stringSchema]
    },
    lastname: {
      allOf: [stringSchema]
    },
    age: {
      type: 'integer',
      minimum: 14
    },
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
  required: ['id', 'name', 'lastname', 'age', 'email', 'password'],
  additionalProperties: false
};
