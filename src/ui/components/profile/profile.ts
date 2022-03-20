import { IUser } from '@/types';

import Block from '@/utils/Block';
import { getProfileItems } from '@/utils/helpers';

import Link from '@/ui/elements/link/link';

import template from './profile.tpl.pug';

class Profile extends Block {
  constructor(props: IUser) {
    super(props);
  }

  protected initChildren() {
    this.childrens.changeInfoLink = new Link({
      url: '/settings',
      name: 'Изменить данные',
    });

    this.childrens.changePasswordLink = new Link({
      url: '/password',
      name: 'Изменить пароль',
    });

    this.childrens.exitLink = new Link({
      url: '/',
      name: 'Выйти',
      mod: 'link--red',
    });
  }

  render() {
    return this.compile(template, {
      items: getProfileItems(this.props),
      ...this.props,
    });
  }
}

export default Profile;
