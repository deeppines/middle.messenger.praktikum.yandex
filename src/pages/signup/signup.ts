import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import SignupForm from '@/ui/components/form/signup-form/signup-form';

import template from './signup.tpl.pug';

class SignupPage extends Block {
  protected initChildren() {
    this.childrens.form = new SignupForm({
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

export default SignupPage;
