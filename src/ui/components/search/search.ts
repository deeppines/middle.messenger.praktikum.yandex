import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import template from './search.tpl.pug';

interface ISearch {
  events?: TEvents;
}
class Search extends Block {
  constructor(props: ISearch) {
    super(props);
  }

  render() {
    return this.compile(template, {});
  }
}

export default Search;
