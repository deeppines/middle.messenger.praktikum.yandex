import HTTPTransport from './HTTPTransport';

import { expect } from 'chai';
import { describe } from 'mocha';
import jsdom from 'mocha-jsdom';

describe('HTTPTransport util', () => {
  const baseUrl = 'http://localhost:1234';
  jsdom({ url: baseUrl });

  it('GET - should return true', async () => {
    const endpoint = '/api/test/get';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.get('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('POST - should return true', async () => {
    const endpoint = '/api/test/post';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.post('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('PUT - should return true', async () => {
    const endpoint = '/api/test/put';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.put('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('DELETE - should return true', async () => {
    const endpoint = '/api/test/delete';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.delete('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('PATCH - should return true', async () => {
    const endpoint = '/api/test/patch';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.patch('');

    expect(response).to.have.property('status').and.equal(200);
  });
});
