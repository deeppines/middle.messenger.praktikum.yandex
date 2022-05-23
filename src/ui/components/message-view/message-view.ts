import { IMessageItem } from 'src/types';

import Block from 'src/utils/Block';

import template from './message-view.tpl.pug';

import { withActiveChat } from 'src/hoc';
import { withUser } from 'src/hoc/withUser';

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

export default withActiveChat(withUser(MessageView));
