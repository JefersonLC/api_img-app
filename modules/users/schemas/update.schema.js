const stringSchema = {
  type: 'string',
  minLength: 2,
  maxLength: 100
};

export const updateSchema = {
  type: 'object',
  properties: {
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
  additionalProperties: false
};
