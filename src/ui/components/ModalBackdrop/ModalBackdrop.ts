import { TEvents } from '@/types';

import Block from '@/utils/Block';

import template from './ModalBackdrop.tpl.pug';

interface IModalBackdrop {
  id: string;
  title: string;
  classes?: string;
  events?: TEvents;
  modalContent?: Block;
}

class ModalBackdrop extends Block {
  constructor(props: IModalBackdrop) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

export default ModalBackdrop;