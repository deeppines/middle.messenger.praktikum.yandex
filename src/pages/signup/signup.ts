import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import template from './signup.tpl.pug';

class SignupPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new SignupPage();

  renderDOM('#app', page);
});
