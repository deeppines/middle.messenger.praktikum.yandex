import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Icon from '@/ui/elements/icon/icon';

import template from './chat-header.tpl.pug';

import iconAdd from '@/assets/icons/icon-add.svg';
import iconCrossCircle from '@/assets/icons/icon-cross-circle.svg';
import iconSettings from '@/assets/icons/icon-settings.svg';
import iconTrash from '@/assets/icons/icon-trash.svg';
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
        click: (e) => this.clickSettingsHandler(e),
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
    });
  }

  clickSettingsHandler(e: Event) {
    const button = e.target as HTMLElement;
    const settings = document.getElementById('settings');

    if (button) button.classList.toggle('active');
    if (settings) settings.classList.toggle('active');
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withActiveChat(ChatHeader);
