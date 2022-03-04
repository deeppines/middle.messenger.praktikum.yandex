import Block from '@/utils/Block';

import template from './message-form.tpl.pug';

class MessageForm extends Block {
  render() {
    return this.compile(template, {});
  }
}

export default MessageForm;
