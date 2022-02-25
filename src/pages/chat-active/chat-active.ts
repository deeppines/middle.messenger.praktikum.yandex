import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import template from './chat-active.tpl.pug';

class ChatPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ChatPage();

  renderDOM('#app', page);
});
