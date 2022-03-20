import { ISignInData, ISignUpData } from '@/types';

import BaseAPI from './BaseAPI';

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signUp(data: ISignUpData): Promise<unknown> {
    return this.http.post('/signup', { data });
  }

  signIn(data: ISignInData): Promise<unknown> {
    return this.http.post('/signin', { data });
  }

  user(): Promise<unknown> {
    return this.http.get('/user');
  }

  logout(): Promise<unknown> {
    return this.http.post('/logout');
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
