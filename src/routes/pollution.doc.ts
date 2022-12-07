const fetchPollution = {
  summary: 'fetch pollution stats of the introduced location',
  description: 'fetch the pollution stats of the searched location',
  tags: ['Pollution'],
  parameters: [
    {
      name: 'longitude',
      in: 'path',
      required: true,
      schema: { type: 'number' },
    },
    {
      name: 'latitude',
      in: 'path',
      required: true,
      schema: { type: 'number' },
    },
  ],
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: { Result: { Pollution: {} } },
          },
        },
      },
    },
    400: {
      description: 'longitude or latitude values are invalid',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              errors: [
                {
                  message: 'Check latitude value!',
                  field: 'latitude',
                },
              ],
            },
          },
        },
      },
    },
  },
};

const mostPolluted = {
  summary: 'fetch pollution stats of the introduced location',
  description: 'fetch the pollution stats of the searched location',
  tags: ['Pollution'],
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              date: 'Wednesday, December 7, 2022, 12:28',
              value: 72,
            },
          },
        },
      },
    },
    404: {
      description: 'did not find any pollution stats saved',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            example: {
              errors: [
                {
                  message: 'Not found',
                },
              ],
            },
          },
        },
      },
    },
  },
};

export const pollutionDoc = {
  '/api/fetchPollutionStats/{longitude}/{latitude}': {
    get: fetchPollution,
  },
  '/api/mostPolluted': {
    get: mostPolluted,
  },
};
