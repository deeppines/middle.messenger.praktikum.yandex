import Block from '@/utils/Block';

import Icon from '@/ui/elements/icon/icon';
import Profile from '@/ui/components/profile/profile';

import { profileInfo } from './data';
import template from './profile.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';
class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profile = new Profile({
      data: profileInfo,
    });

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

export default ProfilePage;
