import { IChatCreate } from '@/types';

import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';
import { closeModal } from '@/utils/helpers';

import AddChat from '@/ui/components/add-chat/add-chat';
import ChatFooter from '@/ui/components/chat-footer/chat-footer';
import ChatHeader from '@/ui/components/chat-header/chat-header';
import ChatList from '@/ui/components/chat-list/chat-list';
import Header from '@/ui/components/header/header';

// import MessageView from '@/ui/components/message-view/message-view';
import template from './messenger.tpl.pug';

import ChatsController from '@/controllers/ChatsController';

class MessengerPage extends Block {
  protected initChildren() {
    this.childrens.header = new Header();

    this.childrens.chats = new ChatList({});

    this.childrens.chatHeader = new ChatHeader();
    this.childrens.chatFooter = new ChatFooter();

    this.childrens.addChatModal = new AddChat({
      events: {
        click: (e) => closeModal('addChat', e),
        submit: (e) => this.submitHandler(e),
      },
    });

    // this.childrens.messageView = new MessageView({data: ''});
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    ChatsController.addChat(data as unknown as IChatCreate);
  }

  render() {
    ChatsController.getChats();

    return this.compile(template, {});
  }
}

export default MessengerPage;
