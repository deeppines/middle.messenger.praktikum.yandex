import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';
import renderDOM from '@/utils/renderDOM';

import ProfileChangeInfo from '@/ui/components/profile-change-info/profile-change-info';

import template from './profile-change-info.tpl.pug';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileChangeInfo = new ProfileChangeInfo({
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
