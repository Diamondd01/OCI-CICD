const request = require('supertest');
const app = require('../Server/server'); 
describe('GET /', () => {
  it('responds with a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
