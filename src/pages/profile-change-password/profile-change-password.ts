import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import template from './profile-change-password.tpl.pug';

class ProfilePage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
