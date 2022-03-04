import Block from '@/utils/Block';

import template from './chat-header.tpl.pug';

class ChatHeader extends Block {
  render() {
    return this.compile(template, {});
  }
}

export default ChatHeader;
