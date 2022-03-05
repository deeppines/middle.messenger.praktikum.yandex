import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Input from '@/ui/elements/input/input';
import Link from '@/ui/elements/link/link';

import template from './profile-change-info.tpl.pug';

interface IProfileChangeInfo {
  events?: TEvents;
}
class ProfileChangeInfo extends Block {
  constructor(props: IProfileChangeInfo) {
    super(props);
  }

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

    this.childrens.email = new Input({
      type: 'email',
      name: 'email',
      placeholder: 'pochta@yandex.ru',
    });

    this.childrens.login = new Input({
      type: 'text',
      name: 'login',
      placeholder: 'ivanivanov',
    });

    this.childrens.firstName = new Input({
      type: 'text',
      name: 'first_name',
      placeholder: 'Иван',
    });

    this.childrens.secondName = new Input({
      type: 'text',
      name: 'second_name',
      placeholder: 'Иванов',
    });

    this.childrens.displayName = new Input({
      type: 'text',
      name: 'display_name',
      placeholder: 'Иван',
    });

    this.childrens.phone = new Input({
      type: 'tel',
      name: 'phone',
      placeholder: '+7 (909) 967 30 30',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfileChangeInfo;
