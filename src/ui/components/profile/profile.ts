import Block from '@/utils/Block';
import { getProfileItems } from '@/utils/getProfileItems';

import Button from '@/ui/elements/button/button';
import Link from '@/ui/elements/link/link';

import template from './profile.tpl.pug';

import AuthController from '@/controllers/AuthController';
import { withUser } from '@/hoc/withUser';

class Profile extends Block {
  protected initChildren() {
    this.childrens.changeInfoLink = new Link({
      url: '/settings',
      name: 'Изменить данные',
    });

    this.childrens.changePasswordLink = new Link({
      url: '/password',
      name: 'Изменить пароль',
    });

    this.childrens.exitLink = new Button({
      type: 'button',
      name: 'logout',
      text: 'Выйти',
      classes: 'button--link button--link-red',
      events: {
        click: () => AuthController.logout(),
      },
    });
  }

  render() {
    return this.compile(template, {
      items: getProfileItems(this.props),
      ...this.props,
    });
  }
}

export default withUser(Profile);
