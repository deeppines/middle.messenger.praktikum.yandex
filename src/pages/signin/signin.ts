import SigninForm from '../../ui/components/forms/signin-form/signin-form';
import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import template from './signin.tpl.pug';

class SigninPage extends Block {
  protected initChildren() {
    this.childrens.form = new SigninForm({
      url: '#',
      method: 'POST',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new SigninPage();

  renderDOM('#app', page);
});
