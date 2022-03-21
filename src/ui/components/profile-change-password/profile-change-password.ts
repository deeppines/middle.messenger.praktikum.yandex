import { TEvents } from '@/types/common';

import Block from '@/utils/Block';
import { getAvatarPlug } from '@/utils/getAvatarPlug';

import Button from '@/ui/elements/button/button';
import Link from '@/ui/elements/link/link';
import FormField from '@/ui/components/form-field/form-field';

import template from './profile-change-password.tpl.pug';

import { PASSWORD } from '@/constants';
import { withUser } from '@/hoc/withUser';

interface IProfileChangePassword {
  events?: TEvents;
}
class ProfileChangePassword extends Block {
  constructor(props: IProfileChangePassword) {
    super(props);
  }

  protected initChildren() {
    this.childrens.escLink = new Link({
      url: '/profile',
      name: 'Отмена',
    });

    this.childrens.saveButton = new Button({
      type: 'submit',
      name: 'Сохранить',
      text: 'Сохранить',
    });

    this.childrens.oldPassword = new FormField({
      inputProps: {
        type: 'password',
        name: 'oldPassword',
        placeholder: '•••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPassword = new FormField({
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPasswordRepeat = new FormField({
      inputProps: {
        type: 'password',
        name: 'passwordCheck',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });
  }

  render() {
    return this.compile(template, {
      plug: getAvatarPlug(this.props),
      ...this.props,
    });
  }
}

export default withUser(ProfileChangePassword);
