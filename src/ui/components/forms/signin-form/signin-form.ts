import Link from '../../../../ui/elements/link/link';
import Block from '../../../../utils/Block';

import template from './signin-form.tpl.pug';

interface ISigninForm {
  url: string;
  method: string;
}

class SigninForm extends Block {
  constructor(props: ISigninForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.test = new Link({
      url: '#',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default SigninForm;
