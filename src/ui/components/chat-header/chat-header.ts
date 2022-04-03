import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';
import { closeModal, openModal } from '@/utils/helpers';

import Button from '@/ui/elements/button/button';
import Icon from '@/ui/elements/icon/icon';

import DelChatForm from '../form/DelChatForm/DelChatForm';
import UserChatForm from '../form/UserChatForm/UserChatForm';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';

import template from './chat-header.tpl.pug';

import iconAdd from '@/assets/icons/icon-add.svg';
import iconCrossCircle from '@/assets/icons/icon-cross-circle.svg';
import iconSettings from '@/assets/icons/icon-settings.svg';
import iconTrash from '@/assets/icons/icon-trash.svg';
import ChatsController from '@/controllers/ChatsController';
import { withActiveChat } from '@/hoc';

class ChatHeader extends Block {
  protected initChildren() {
    this.childrens.settings = new Button({
      type: 'button',
      name: 'settings',
      classes: 'chat-header__button',
      block: new Icon({
        id: iconSettings,
        width: 3,
        height: 16,
      }),
      events: {
        click: () => this.clickSettingsHandler(),
      },
    });

    this.childrens.addUser = new Button({
      type: 'button',
      name: 'addUser',
      text: 'Добавить пользователя',
      classes: 'button--icon',
      block: new Icon({
        id: iconAdd,
        width: 22,
        height: 22,
      }),
      events: {
        click: () => openModal('addUser'),
      },
    });

    this.childrens.delUser = new Button({
      type: 'button',
      name: 'delUser',
      text: 'Удалить пользователя',
      classes: 'button--icon',
      block: new Icon({
        id: iconCrossCircle,
        width: 22,
        height: 22,
      }),
      events: {
        click: () => openModal('delUser'),
      },
    });

    this.childrens.delChat = new Button({
      type: 'button',
      name: 'delChat',
      text: 'Удалить чат',
      classes: 'button--icon button--icon-alert',
      block: new Icon({
        id: iconTrash,
        width: 20,
        height: 20,
      }),
      events: {
        click: () => openModal('delChat'),
      },
    });

    this.childrens.addUserModal = new ModalBackdrop({
      id: 'addUser',
      title: 'Добавить пользователя',
      events: {
        click: (e) => closeModal('addUser', e),
      },
      modalContent: new UserChatForm({
        buttonText: 'Добавить',
        chatId: this.props.id,
        events: {
          submit: (e: Event) => this.addUserHandler(e),
        },
      }),
    });

    this.childrens.delUserModal = new ModalBackdrop({
      id: 'delUser',
      title: 'Удалить пользователя',
      events: {
        click: (e) => closeModal('delUser', e),
      },
      modalContent: new UserChatForm({
        buttonText: 'Удалить',
        chatId: this.props.id,
        events: {
          submit: (e: Event) => this.delUserHandler(e),
        },
      }),
    });

    this.childrens.delChatModal = new ModalBackdrop({
      id: 'delChat',
      title: 'Удалить чат?',
      events: {
        click: (e) => closeModal('delChat', e),
      },
      modalContent: new DelChatForm({
        modalId: 'delChat',
      }),
    });
  }

  clickSettingsHandler() {
    const settings = document.getElementById('settings');

    if (settings) settings.classList.toggle('active');
  }

  addUserHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);
    data.chatId = this.props.id;

    ChatsController.addUser(data);
  }

  delUserHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);
    data.chatId = this.props.id;

    ChatsController.deleteUser(data);
  }

  render() {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(ChatHeader);
