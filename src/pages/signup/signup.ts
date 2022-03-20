import { ISignUpFormData } from '@/types';

import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import SignupForm from '@/ui/components/form/signup-form/signup-form';

import template from './signup.tpl.pug';

import AuthController from '@/controllers/AuthController';

class SignupPage extends Block {
  protected initChildren() {
    this.childrens.form = new SignupForm({
      events: {
        submit: (e) => this.submitHandler(e),
      },
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    AuthController.signUp(data as unknown as ISignUpFormData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SignupPage;
