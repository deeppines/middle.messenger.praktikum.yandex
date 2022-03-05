import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import ProfileChangePassword from '@/ui/components/profile-change-password/profile-change-password';

import template from './profile-change-password.tpl.pug';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
