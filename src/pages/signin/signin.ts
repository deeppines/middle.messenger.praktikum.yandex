import { ISignInData } from '@/types';

import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import SigninForm from '@/ui/components/form/signin-form/signin-form';

import template from './signin.tpl.pug';

import AuthController from '@/controllers/AuthController';

class SigninPage extends Block {
  protected initChildren() {
    this.childrens.form = new SigninForm({
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

    AuthController.signIn(data as unknown as ISignInData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SigninPage;
