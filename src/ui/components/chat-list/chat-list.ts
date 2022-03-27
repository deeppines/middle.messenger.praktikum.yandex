import { TEvents } from '@/types';

import Block from '@/utils/Block';
import { openModal } from '@/utils/helpers';

import Button from '@/ui/elements/button/button';

import template from './chat-list.tpl.pug';

import { withChats } from '@/hoc';

interface IChatList {
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
    const { events, ...items } = this.props;

    return this.compile(template, {
      events,
      items: items,
    });
  }
}

export default withChats(ChatList);
