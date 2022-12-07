import request from 'supertest';

import { app } from '../../app';
import { Pollution } from '../../models/pollution';

it('returns a 404 if a pollution is not found', async () => {
  await request(app).get(`/api/mostPolluted`).send().expect(404);
});

it('returns the highest pollution level details', async () => {
  const pollutionOne = Pollution.build({
    aqius: 15,
    mainus: 'p2',
    aqicn: 6,
    maincn: 'p2',
  });
  const pollutionTwo = Pollution.build({
    aqius: 20,
    mainus: 'p2',
    aqicn: 8,
    maincn: 'p2',
  });
  const pollutionThree = Pollution.build({
    aqius: 25,
    mainus: 'p2',
    aqicn: 10,
    maincn: 'p2',
  });

  await pollutionOne.save();
  await pollutionTwo.save();
  await pollutionThree.save();

  const getMostPollutedResponse = await request(app)
    .get(`/api/mostPolluted`)
    .send()
    .expect(200);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  expect(getMostPollutedResponse.body.value).toEqual(pollutionThree.aqius);
  expect(getMostPollutedResponse.body.date).toEqual(
    new Date(pollutionThree.createdAt).toLocaleString('en-US', options)
  );
});
