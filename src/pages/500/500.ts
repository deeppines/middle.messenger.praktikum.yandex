import Block from '@/utils/Block';

import template from './500.tpl.pug';

class ServerErrorPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

export default ServerErrorPage;
