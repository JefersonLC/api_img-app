export const createSchema = {
  type: 'object',
  properties: {
    description: {
      type: 'string',
      minLength: 2,
      maxLength: 150
    }
  },
  required: ['description'],
  additionalProperties: false
};
