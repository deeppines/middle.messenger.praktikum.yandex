import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import Profile from '@/ui/components/profile/profile';

import { profileInfo } from './data';
import template from './profile.tpl.pug';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profile = new Profile({
      data: profileInfo,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
