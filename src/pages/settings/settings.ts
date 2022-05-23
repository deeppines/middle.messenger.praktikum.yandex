import { IUser } from 'src/types';

import Block from 'src/utils/Block';
import { formDataToObject } from 'src/utils/formDataToObject';

import UserController from 'src/controllers/UserController';

import Icon from 'src/ui/elements/icon/icon';
import ProfileChangeInfo from 'src/ui/components/profile-change-info/profile-change-info';

import template from './settings.tpl.pug';

import arrowLeft from 'src/assets/icons/arrow-left.svg';

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
