import { CronJob } from 'cron';
import axios from 'axios';

import { Pollution } from '../models/pollution';

const job = new CronJob('0 */1 * * * *', async function () {
  console.log('start job');
  const config = {
    method: 'get',
    url: `http://api.airvisual.com/v2/nearest_city?lat=48.856613&lon=2.352222&key=${process.env.IQAIR_API_KEY}`,
    headers: {},
  };

  const { data } = await axios(config);

  const pollution = Pollution.build(data.data.current.pollution);
  await pollution.save();
});

export { job as savePollutionJob };
