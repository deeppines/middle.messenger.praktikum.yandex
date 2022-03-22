import { TEvents } from '@/types';

import Block from '@/utils/Block';
import { addClass, removeClass } from '@/utils/helpers';

import Button from '@/ui/elements/button/button';
import FormField from '@/ui/components/form-field/form-field';

import template from './change-avatar.tpl.pug';

interface IChangeAvatar {
  events?: TEvents;
}

class ChangeAvatar extends Block {
  constructor(props: IChangeAvatar) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.file = new FormField({
      inputProps: {
        type: 'file',
        name: 'avatar',
        required: true,
        placeholder: 'Выбрать файл',
        events: {
          change: (e) => this.setFileName(e),
        },
      },
      label: 'Выбрать файл на компьютере',
      name: 'avatar',
      classes: 'form-field--file',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Поменять',
      text: 'Поменять',
    });
  }

  setFileName(e: Event) {
    const input = e.target as HTMLInputElement;
    const label = document.querySelector('label[for=avatar]') as HTMLElement;
    const pathArr = input.value.split('\\');
    const fileName = pathArr[pathArr.length - 1];

    if (fileName.length > 0 && label?.textContent) {
      label.textContent = fileName;
      addClass('hasFile', label);
    } else if (label?.textContent) {
      label.textContent = 'Выбрать файл на компьютере';
      removeClass('hasFile', label);
    }
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      id: 'changeAvatar',
    });
  }
}

export default ChangeAvatar;
