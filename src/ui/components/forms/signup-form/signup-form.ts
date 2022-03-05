import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Input from '@/ui/elements/input/input';
import Link from '@/ui/elements/link/link';

import template from './signup-form.tpl.pug';

interface ISignupForm {
  url: string;
  method: string;
}

class SignupForm extends Block {
  constructor(props: ISignupForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.email = new Input({
      type: 'email',
      name: 'email',
      placeholder: 'Почта',
    });

    this.childrens.login = new Input({
      type: 'text',
      name: 'login',
      placeholder: 'Логин',
    });

    this.childrens.firstName = new Input({
      type: 'text',
      name: 'first_name',
      placeholder: 'Имя',
    });

    this.childrens.phone = new Input({
      type: 'tel',
      name: 'phone',
      placeholder: 'Телефон',
    });

    this.childrens.password = new Input({
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
    });

    this.childrens.passwordCheck = new Input({
      type: 'password',
      name: 'passwordCheck',
      placeholder: 'Пароль (еще раз)',
    });

    this.childrens.secondName = new Input({
      type: 'text',
      name: 'second_name',
      placeholder: 'Фамилия',
    });

    this.childrens.link = new Link({
      url: '/signin/signin.html',
      name: 'Войти',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Зарегистрироваться',
      text: 'Зарегистрироваться',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SignupForm;
