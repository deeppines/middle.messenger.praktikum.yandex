import { IPasswordFormData, IUser } from '@/types';

import UserAPI from '@/api/UserAPI';

import { closeModal } from '@/utils/helpers';

import { PagePaths } from '@/constants';
import router from '@/router/Router';
import store from '@/store/Store';

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(data: IUser) {
    const newUser = await this.api.updateProfile(data);

    store.set('currentUser', newUser);

    router.go(PagePaths.Profile);
  }

  async updatePassword(data: IPasswordFormData) {
    if (data.newPassword !== data.passwordCheck) {
      throw new Error('Пароли не совпадают');
    }

    const { passwordCheck, ...updatePasswordData } = data;

    await this.api.updatePassword(updatePasswordData);

    router.go(PagePaths.Profile);
  }

  async updateAvatar(data: FormData) {
    const response = (await this.api.updateAvatar(data)) as unknown as IUser;

    store.set('currentUser.avatar', response.avatar);

    closeModal('changeAvatar');
  }
}

export default new UserController();
