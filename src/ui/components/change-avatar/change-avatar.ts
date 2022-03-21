import { TEvents } from '@/types';

import Block from '@/utils/Block';

import template from './change-avatar.tpl.pug';

interface IChangeAvatar {
  events?: TEvents;
}

class ChangeAvatar extends Block {
  constructor(props: IChangeAvatar) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      id: 'changeAvatar',
    });
  }
}

export default ChangeAvatar;
