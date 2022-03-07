import { TEvents } from '@/types/common';

import Block from '@/utils/Block';
import { addClass, inputHasValue, removeClass, setMessage } from '@/utils/helpers';
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
    if (this.element) addClass(this.classes.hasValue, this.element);

    if (this.input && this.props.validate) {
      this.validate(this.input);
    }
  }

  onBlur(): void {
    if (this.element && this.input && !inputHasValue(this.input)) {
      removeClass(this.classes.hasValue, this.element);
    }

    if (this.input && this.props.validate) {
      this.validate(this.input);
    }
  }

  validate(input: HTMLInputElement): void {
    if (!isValid(input)) {
      if (this.element) addClass(this.classes.hasError, this.element);
      if (this.message) setMessage(getValidationMsg(input), this.message);
    } else {
      if (this.element) removeClass(this.classes.hasValue, this.element);
      if (this.message) setMessage('', this.message);
    }
  }

  protected initChildren(): void {
    this.childrens.input = new Input({ ...this.props.inputProps });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default FormField;
