import { IChatCreate } from 'src/types';

import Block from 'src/utils/Block';
import { formDataToObject } from 'src/utils/formDataToObject';
import { closeModal } from 'src/utils/helpers';

import ChatsController from 'src/controllers/ChatsController';

import ChatList from 'src/ui/components/chat-list/chat-list';
import ChatFooter from 'src/ui/components/ChatFooter/ChatFooter';
import ChatHeader from 'src/ui/components/ChatHeader/ChatHeader';
import AddChatForm from 'src/ui/components/form/AddChatForm/AddChatForm';
import Header from 'src/ui/components/header/header';
import MessageView from 'src/ui/components/message-view/message-view';
import ModalBackdrop from 'src/ui/components/ModalBackdrop/ModalBackdrop';

import template from './messenger.tpl.pug';

import store from 'src/store/Store';

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
    const userId = String(state.currentUser?.id);

    if (chatId && userId) {
      store.set('activeChat.chat', currentChat);
      ChatsController.setSocketConnection(userId, chatId);
    }
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
