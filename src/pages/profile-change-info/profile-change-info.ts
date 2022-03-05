import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import ProfileChangeInfo from '@/ui/components/profile-change-info/profile-change-info';

import template from './profile-change-info.tpl.pug';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileChangeInfo = new ProfileChangeInfo();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
