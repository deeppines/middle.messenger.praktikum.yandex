import Block from '@/utils/Block';

import Link from '@/ui/elements/link/link';

import template from './header.tpl.pug';

class Header extends Block {
  protected initChildren() {
    this.childrens.link = new Link({
      url: '/profile/profile.html',
      name: 'Профиль',
      mod: 'link--grey link--icon',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default Header;
