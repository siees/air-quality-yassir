import express from 'express';
import 'express-async-errors';
import swaggerDoc from 'swagger-ui-express';

import { errorHandler, NotFoundError } from './common';
import { fetchPollutionRouter } from './routes/fetchPollution';
import { showMostPollutedTimeRouter } from './routes/showMostPollutedTime';
import { swaggerDocumentation } from './helper/documentation';

const app = express();
app.set('trust proxy', true);
app.use(express.json());

app.use(fetchPollutionRouter);
app.use(showMostPollutedTimeRouter);
app.use('/documentations', swaggerDoc.serve);
app.use('/documentations', swaggerDoc.setup(swaggerDocumentation));

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
