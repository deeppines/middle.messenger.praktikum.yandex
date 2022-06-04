import HTTPTransport from './HTTPTransport';

import { expect } from 'chai';
import { describe } from 'mocha';
import jsdom from 'mocha-jsdom';

describe('HTTPTransport util', () => {
  jsdom({ url: 'http://localhost:3000' });

  it('POST - should return true', async () => {
    const endpoint = '/auth';
    const http = new HTTPTransport(endpoint);
    const data = {
      login: 'deeppines',
      password: '8mFn2DM99GT9',
    };

    const response = await http.post('/signin', { data });

    expect(response).to.be.null;
  });

  it('GET - should return true', async () => {
    const endpoint = '/auth';
    const http = new HTTPTransport(endpoint);
    const response = await http.get('/user');

    expect(response).to.have.property('id');
    expect(response).to.not.have.property('reason');
  });

  it('PUT - should return true', async () => {
    const endpoint = '/chats';
    const http = new HTTPTransport(endpoint);
    const data = {
      users: [0],
      chatId: 0,
    };
    return await http
      .put('/users', { data })
      .then((res) => {
        expect(res).to.be.null;
      })
      .catch((res) => {
        expect(res).to.have.property('reason');
      });
  });

  it('DELETE - should return true', async () => {
    const endpoint = '/chats';
    const http = new HTTPTransport(endpoint);
    const data = {
      users: [0],
      chatId: 0,
    };

    return await http
      .delete('/users', { data })
      .then((res) => {
        expect(res).to.be.null;
      })
      .catch((res) => {
        expect(res).to.have.property('reason');
      });
  });

  it('PATCH - should return true', async () => {
    return;
  });
});
