import express, { Request, Response } from 'express';
import { param } from 'express-validator';
import axios from 'axios';

import { validateRequest } from '../common';

const router = express.Router();

router.get(
  '/api/fetchPollutionStats/:longitude/:latitude',
  [
    param('longitude')
      .exists()
      .notEmpty()
      .trim()
      .custom((lng) => isFinite(lng) && Math.abs(lng) <= 180)
      .withMessage('Check longitude value!'),
    param('latitude')
      .exists()
      .notEmpty()
      .trim()
      .custom((lat) => isFinite(lat) && Math.abs(lat) <= 90)
      .withMessage('Check latitude value!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const config = {
      method: 'get',
      url: `http://api.airvisual.com/v2/nearest_city?lat=${req.params.latitude}&lon=${req.params.longitude}&key=${process.env.IQAIR_API_KEY}`,
      headers: {},
    };

    const { data } = await axios(config);

    res.send({ Result: { Pollution: data.data.current.pollution } });
  }
);

export { router as fetchPollutionRouter };
