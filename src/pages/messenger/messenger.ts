import { IChatCreate } from '@/types';

import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';
import { closeModal } from '@/utils/helpers';

import ChatFooter from '@/ui/components/chat-footer/chat-footer';
import ChatHeader from '@/ui/components/chat-header/chat-header';
import ChatList from '@/ui/components/chat-list/chat-list';
import AddChatForm from '@/ui/components/form/AddChatForm/AddChatForm';
import Header from '@/ui/components/header/header';
import MessageView from '@/ui/components/message-view/message-view';
import ModalBackdrop from '@/ui/components/ModalBackdrop/ModalBackdrop';

import template from './messenger.tpl.pug';

import ChatsController from '@/controllers/ChatsController';
import store from '@/store/Store';

class MessengerPage extends Block {
  protected initChildren() {
    this.childrens.header = new Header();

    this.childrens.chats = new ChatList({
      events: {
        click: (e: Event) => this.clickOnChatHandler(e),
      },
    });

    this.childrens.chatHeader = new ChatHeader({});
    this.childrens.chatFooter = new ChatFooter({});

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

    this.childrens.messageView = new MessageView({});
  }

  clickOnChatHandler(e: Event) {
    const button = e.target as HTMLButtonElement;
    const chatId = button.id;
    const state = store.getState();
    const currentChat = state.chats?.filter((item) => item.id === Number(chatId))[0];

    store.set('activeChat', currentChat);
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    ChatsController.addChat(data as unknown as IChatCreate);
  }

  render() {
    return this.compile(template, {});
  }
}

export default MessengerPage;
