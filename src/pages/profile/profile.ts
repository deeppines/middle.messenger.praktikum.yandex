import Block from '@/utils/Block';

import Icon from '@/ui/elements/icon/icon';
import Profile from '@/ui/components/profile/profile';

import template from './profile.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import withStore from '@/hoc/withStore';
import { IState } from '@/store/Store';
class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profile = new Profile(this.props);

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default withStore((state: IState) => ({ ...state.currentUser }))(ProfilePage);
