import Block from '../../../utils/Block';

import template from './section.pug';

class Section extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

export default Section;
