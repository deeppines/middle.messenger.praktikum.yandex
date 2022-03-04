import Block from '@/utils/Block';

import MessageForm from '@/ui/components/message-form/message-form';

import template from './chat-footer.tpl.pug';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.messageForm = new MessageForm();
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatFooter;
