import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import template from './message-form.tpl.pug';

interface IMessageForm {
  events?: TEvents;
}
class MessageForm extends Block {
  constructor(props: IMessageForm) {
    super(props);
  }

  render() {
    return this.compile(template, {});
  }
}

export default MessageForm;
