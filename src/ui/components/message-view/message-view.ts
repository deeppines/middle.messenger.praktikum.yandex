import { IMessageItem } from '@/types';

import Block from '@/utils/Block';

import template from './message-view.tpl.pug';

import { withActiveChat } from '@/hoc';

interface IMessageView {
  data: IMessageItem[];
}

class MessageView extends Block {
  constructor(props: IMessageView) {
    super(props);
  }

  render() {
    return this.compile(template, { data: this.props.messages, ...this.props });
  }
}

export default withActiveChat(MessageView);
