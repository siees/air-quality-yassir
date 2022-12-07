import { pollutionDoc } from '../routes/pollution.doc';

export const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'Air quality',
    version: '0.0.1',
    description: 'This is a mini test project for Yassir',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local dev',
    },
    {
      url: 'http://production',
      description: 'Production dev',
    },
  ],
  tags: [{ name: 'Pollution', description: 'Pollution routes' }],
  paths: {
    ...pollutionDoc,
  },
};
