import { TEvents } from '@/types';

import Block from '@/utils/Block';
import { closeModal } from '@/utils/helpers';

import Button from '@/ui/elements/button/button';

import template from './DelChatForm.tpl.pug';

interface IDelChatForm {
  modalId: string;
  chatId: string;
  events?: TEvents;
}

class DelChatForm extends Block {
  constructor(props: IDelChatForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.cancel = new Button({
      type: 'button',
      name: 'cancel',
      text: 'Отмена',
      classes: 'button--gray',
      events: {
        click: () => closeModal(this.props.modalId),
      },
    });

    this.childrens.accept = new Button({
      type: 'button',
      name: 'accept',
      text: 'Удалить',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

export default DelChatForm;
