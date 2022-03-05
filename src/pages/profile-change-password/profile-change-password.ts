import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';
import renderDOM from '@/utils/renderDOM';

import ProfileChangePassword from '@/ui/components/profile-change-password/profile-change-password';

import template from './profile-change-password.tpl.pug';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword({
      events: {
        submit: (e) => this.submitHandler(e),
      },
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

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
