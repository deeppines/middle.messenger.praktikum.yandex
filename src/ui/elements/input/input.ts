import Block from '../../../utils/Block';

import template from './input.tpl.pug';

interface IButton {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
}

class Input extends Block {
  constructor(props: IButton) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Input;
