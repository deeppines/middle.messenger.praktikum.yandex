import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Input from '@/ui/elements/input/input';
import Link from '@/ui/elements/link/link';

import template from './signin-form.tpl.pug';

interface ISigninForm {
  url: string;
  method: string;
  events?: TEvents;
}

class SigninForm extends Block {
  constructor(props: ISigninForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.login = new Input({
      type: 'text',
      name: 'login',
      placeholder: 'Логин',
    });

    this.childrens.password = new Input({
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
    });

    this.childrens.link = new Link({
      url: '/signup/signup.html',
      name: 'Нет аккаунта?',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Войти',
      text: 'Войти',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SigninForm;
