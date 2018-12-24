process.env.NODE_ENV = 'test';
const esmreq = require('esm')(module, { cjs: true }); // make esm work with jest
const request = require('supertest');
const server = esmreq('./index').default ;

afterEach(() => {
  server.close();
});

describe('routes : index', () => {
  describe('GET /', () => {
    it('should return json', async () => {
      const res = await request(server).get('/');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual('application/json');
        expect(res.body.status).toEqual('success');
        expect(res.body.message).toEqual('Hello, world!');
    });
  });
});
