import { TEvents } from '@/types';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import FormField from '@/ui/components/form-field/form-field';

import template from './UserChatForm.tpl.pug';

import { LOGIN } from '@/constants';
import { withActiveChat } from '@/hoc';

interface IUserChatForm {
  buttonText: string;
  chatId?: string;
  events?: TEvents;
}

class UserChatForm extends Block {
  constructor(props: IUserChatForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.login = new FormField({
      inputProps: {
        type: 'text',
        name: 'login',
        required: true,
        minlength: 3,
        maxlength: 20,
        pattern: LOGIN,
        placeholder: '',
      },
      label: 'Логин',
      name: 'login',
      validate: true,
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'submit',
      text: this.props.buttonText,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(UserChatForm);
