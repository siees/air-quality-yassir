import express, { Request, Response } from 'express';
import { Pollution } from '../models/pollution';
import { NotFoundError } from '../common';

const router = express.Router();

router.get('/api/mostPolluted', async (req: Request, res: Response) => {
  const mostPolluted = await Pollution.findOne().sort({ aqius: -1 });

  if (!mostPolluted) throw new NotFoundError();

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  const dateFormatted = new Date(mostPolluted.createdAt).toLocaleString(
    'en-US',
    options
  );

  res.send({ date: dateFormatted, value: mostPolluted.aqius });
});

export { router as showMostPollutedTimeRouter };
