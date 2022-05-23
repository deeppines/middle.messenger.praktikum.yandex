import Block from 'src/utils/Block';
import { formDataToObject } from 'src/utils/formDataToObject';

import ChatsController from 'src/controllers/ChatsController';

import Icon from 'src/ui/elements/icon/icon';
import MessageForm from 'src/ui/components/message-form/message-form';

import template from './chat-footer.tpl.pug';

import iconClip from 'src/assets/icons/icon-clip.svg';
import { withActiveChat } from 'src/hoc';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.messageForm = new MessageForm({
      events: {
        submit: (e) => this.submitHandler(e),
      },
    });

    this.childrens.icon = new Icon({
      id: iconClip,
      width: 32,
      height: 32,
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    ChatsController.sendMessage(String(data.message));

    form.reset();
  }

  render() {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(ChatFooter);
