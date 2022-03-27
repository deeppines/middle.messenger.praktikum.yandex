import { IChatCreate } from '@/types';

import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';
import { closeModal } from '@/utils/helpers';

import ChatFooter from '@/ui/components/chat-footer/chat-footer';
import ChatHeader from '@/ui/components/chat-header/chat-header';
import ChatList from '@/ui/components/chat-list/chat-list';
import AddChatForm from '@/ui/components/form/AddChatForm/AddChatForm';
import Header from '@/ui/components/header/header';
import ModalBackdrop from '@/ui/components/ModalBackdrop/ModalBackdrop';

// import MessageView from '@/ui/components/message-view/message-view';
import template from './messenger.tpl.pug';

import ChatsController from '@/controllers/ChatsController';

class MessengerPage extends Block {
  protected initChildren() {
    this.childrens.header = new Header();

    this.childrens.chats = new ChatList({});

    this.childrens.chatHeader = new ChatHeader();
    this.childrens.chatFooter = new ChatFooter();

    this.childrens.addChatModal = new ModalBackdrop({
      id: 'addChat',
      title: 'Введите название',
      events: {
        click: (e) => closeModal('addChat', e),
      },
      modalContent: new AddChatForm({
        events: {
          submit: (e) => this.submitHandler(e),
        },
      }),
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
