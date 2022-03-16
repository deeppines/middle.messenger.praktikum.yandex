import Block from '@/utils/Block';

import ChatList from '@/ui/components/chat-list/chat-list';
import Header from '@/ui/components/header/header';

import { data } from './data';
import template from './messenger.tpl.pug';

class MessengerPage extends Block {
  protected initChildren() {
    this.childrens.header = new Header();

    this.childrens.chats = new ChatList({
      items: data,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default MessengerPage;
