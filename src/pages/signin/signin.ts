import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import template from './signin.tpl.pug';

class SigninPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new SigninPage();

  renderDOM('#app', page);
});
