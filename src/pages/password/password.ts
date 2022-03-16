import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import Icon from '@/ui/elements/icon/icon';
import ProfileChangePassword from '@/ui/components/profile-change-password/profile-change-password';

import template from './password.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';

class PasswordPage extends Block {
  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword({
      events: {
        submit: (e) => this.submitHandler(e),
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

    // eslint-disable-next-line no-restricted-syntax
    console.log(formDataToObject(formData));
  }

  render() {
    return this.compile(template, {});
  }
}

export default PasswordPage;
