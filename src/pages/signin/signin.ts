import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import SigninForm from '@/ui/components/form/signin-form/signin-form';

import template from './signin.tpl.pug';

class SigninPage extends Block {
  protected initChildren() {
    this.childrens.form = new SigninForm({
      url: '#',
      method: 'POST',
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

export default SigninPage;
