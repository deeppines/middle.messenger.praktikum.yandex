import { TEvents } from '@/types/common';

import Block from '@/utils/Block';
import { getValidationMsg, isValid } from '@/utils/validation';

import Input, { IInput } from '@/ui/elements/input/input';

import template from './form-field.tpl.pug';

interface IFormField {
  inputProps: IInput;
  label: string;
  name: string;
  validate?: boolean;
  events?: TEvents;
}

class FormField extends Block {
  constructor(props: IFormField) {
    super(props);

    this.setListeners();
  }

  classes = {
    hasValue: 'hasValue',
    hasError: 'isError',
  };

  input = this.element?.querySelector('input');
  message = this.element?.querySelector('span');

  setListeners() {
    this.input?.addEventListener('focus', this.onFocus.bind(this));
    this.input?.addEventListener('blur', this.onBlur.bind(this));
  }

  onFocus(): void {
    this.addClass(this.classes.hasValue);

    if (this.input && this.props.validate) {
      this.validate(this.input);
    }
  }

  onBlur(): void {
    if (this.input && !this.checkValue(this.input)) {
      this.removeClass(this.classes.hasValue);
    }

    if (this.input && this.props.validate) {
      this.validate(this.input);
    }
  }

  validate(input: HTMLInputElement): void {
    if (!isValid(input)) {
      this.addClass(this.classes.hasError);
      this.setErrorMsg(getValidationMsg(input));
    } else {
      this.removeClass(this.classes.hasError);
      this.setErrorMsg('');
    }
  }

  setErrorMsg(msg: string): void {
    if (this.message) this.message.innerText = msg;
  }

  addClass(cl: string): void {
    this.element?.classList.add(cl);
  }

  removeClass(cl: string): void {
    this.element?.classList.remove(cl);
  }

  checkValue(input: HTMLInputElement): boolean {
    if (input.value) return true;

    return false;
  }

  protected initChildren(): void {
    this.childrens.input = new Input({ ...this.props.inputProps });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default FormField;
