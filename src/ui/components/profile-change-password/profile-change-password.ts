import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Input from '@/ui/elements/input/input';
import Link from '@/ui/elements/link/link';

import template from './profile-change-password.tpl.pug';

class ProfileChangePassword extends Block {
  protected initChildren() {
    this.childrens.escLink = new Link({
      url: '/profile/profile.html',
      name: 'Отмена',
    });

    this.childrens.saveButton = new Button({
      type: 'submit',
      name: 'Сохранить',
      text: 'Сохранить',
    });

    this.childrens.oldPassword = new Input({
      type: 'password',
      name: 'oldPassword',
      placeholder: '•••••••••',
    });

    this.childrens.newPassword = new Input({
      type: 'password',
      name: 'newPassword',
      placeholder: '•••••••••••',
    });

    this.childrens.newPasswordRepeat = new Input({
      type: 'password',
      name: 'newPassword',
      placeholder: '•••••••••••',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfileChangePassword;
