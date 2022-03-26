import { TEvents } from '@/types';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';

import FormField from '../form-field/form-field';

import template from './add-chat.tpl.pug';

interface IAddChat {
  events?: TEvents;
}

class AddChat extends Block {
  constructor(props: IAddChat) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.name = new FormField({
      inputProps: {
        type: 'text',
        name: 'title',
        required: true,
        placeholder: '',
      },
      label: 'Введите имя чата',
      name: 'title',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'add',
      text: 'Добавить',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      id: 'addChat',
    });
  }
}

export default AddChat;
