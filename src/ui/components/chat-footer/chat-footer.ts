import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import MessageForm from '@/ui/components/message-form/message-form';

import template from './chat-footer.tpl.pug';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.messageForm = new MessageForm({
      events: {
        submit: (e) => this.submitHandler(e),
      },
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // eslint-disable-next-line no-restricted-syntax
    console.log(formDataToObject(formData));
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatFooter;
