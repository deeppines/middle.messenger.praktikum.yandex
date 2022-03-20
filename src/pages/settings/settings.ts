import { IUser } from '@/types';

import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import Icon from '@/ui/elements/icon/icon';
import ProfileChangeInfo from '@/ui/components/profile-change-info/profile-change-info';

import template from './settings.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import UserController from '@/controllers/UserController';

class SettingsPage extends Block {
  protected initChildren() {
    this.childrens.profileChangeInfo = new ProfileChangeInfo({
      events: {
        submit: (e: Event) => this.submitHandler(e),
      },
    });

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    UserController.updateProfile(data as unknown as IUser);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SettingsPage;
