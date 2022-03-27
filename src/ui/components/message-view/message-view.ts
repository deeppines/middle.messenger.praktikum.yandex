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
    // console.log(this.props, 'props');

    return this.compile(template, { ...this.props });
  }
}

export default withActiveChat(MessageView);
