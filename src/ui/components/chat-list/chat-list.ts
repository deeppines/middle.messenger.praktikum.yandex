import { IChatItem, TEvents } from '@/types';

import Block from '@/utils/Block';
import { openModal } from '@/utils/helpers';

import Button from '@/ui/elements/button/button';

import template from './chat-list.tpl.pug';

import { withChats } from '@/hoc';

interface IChatList {
  chats?: IChatItem[];
  events?: TEvents;
}

class ChatList extends Block {
  constructor(props: IChatList) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.addChat = new Button({
      type: 'button',
      name: 'addChat',
      text: 'Добавить чат',
      events: {
        click: () => openModal('addChat'),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withChats(ChatList);
