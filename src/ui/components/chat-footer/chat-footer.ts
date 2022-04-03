import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import Icon from '@/ui/elements/icon/icon';
import MessageForm from '@/ui/components/message-form/message-form';

import template from './chat-footer.tpl.pug';

import iconClip from '@/assets/icons/icon-clip.svg';
import ChatsController from '@/controllers/ChatsController';
import { withActiveChat } from '@/hoc';

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
