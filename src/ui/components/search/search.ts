import Block from '@/utils/Block';

import template from './search.tpl.pug';

class Search extends Block {
  render() {
    return this.compile(template, {});
  }
}

export default Search;
