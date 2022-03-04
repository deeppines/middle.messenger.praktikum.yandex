import Block from '@/utils/Block';

import template from './chat-footer.tpl.pug';

class ChatFooter extends Block {
  render() {
    return this.compile(template, {});
  }
}

export default ChatFooter;
