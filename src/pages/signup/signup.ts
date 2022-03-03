import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import SignupForm from '@/ui/components/forms/signup-form/signup-form';

import template from './signup.tpl.pug';

class SignupPage extends Block {
  protected initChildren() {
    this.childrens.form = new SignupForm({
      url: '#',
      method: 'POST',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new SignupPage();

  renderDOM('#app', page);
});
