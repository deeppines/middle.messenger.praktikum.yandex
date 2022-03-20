import { ISignInData, ISignUpFormData } from '@/types';

import AuthAPI from '@/api/AuthAPI';

import Store from '@/store/Store';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: ISignUpFormData) {
    if (data.password !== data.passwordCheck) {
      throw new Error('Пароли не совпадают');
    }

    const { passwordCheck, ...signUpData } = data;

    await this.api.signUp(signUpData);
  }

  async signIn(data: ISignInData) {
    await this.api.signIn(data);
  }

  async getUser() {
    const user = await this.api.user();

    Store.set('currentUser', user);
  }
}

export default new AuthController();
