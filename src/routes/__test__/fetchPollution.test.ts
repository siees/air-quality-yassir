import request from 'supertest';

import { app } from '../../app';

it('returns a 400 if latitude value is invalid', async () => {
  let lat = 'test';
  let lng = 2.352222;
  await request(app)
    .get(`/api/fetchPollutionStats/${lng}/${lat}`)
    .send()
    .expect(400);
});

it('returns a 400 if longitude value is invalid', async () => {
  let lat = 48.856613;
  let lng = 'test';
  await request(app)
    .get(`/api/fetchPollutionStats/${lng}/${lat}`)
    .send()
    .expect(400);
});

it('returns the result if success', async () => {
  let lat = 48.856613;
  let lng = 2.352222;

  await request(app)
    .get(`/api/fetchPollutionStats/${lng}/${lat}`)
    .send()
    .expect(200);
});
