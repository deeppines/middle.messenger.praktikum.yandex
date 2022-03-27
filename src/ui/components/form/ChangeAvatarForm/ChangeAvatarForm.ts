import { TEvents } from '@/types';

import Block from '@/utils/Block';
import { addClass, removeClass } from '@/utils/helpers';

import Button from '@/ui/elements/button/button';

import FormField from '../../form-field/form-field';

import template from './ChangeAvatarForm.tpl.pug';

interface IChangeAvatarForm {
  events?: TEvents;
}

class ChangeAvatarForm extends Block {
  constructor(props: IChangeAvatarForm) {
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
    return this.compile(template, { ...this.props });
  }
}

export default ChangeAvatarForm;
