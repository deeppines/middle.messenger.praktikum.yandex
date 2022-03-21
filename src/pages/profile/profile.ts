import Block from '@/utils/Block';
import { closeModal } from '@/utils/helpers';

import Icon from '@/ui/elements/icon/icon';
import ProfileChangeAvatar from '@/ui/components/change-avatar/change-avatar';
import Profile from '@/ui/components/profile/profile';

import template from './profile.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';
class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profile = new Profile({});

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });

    this.childrens.changeAvatar = new ProfileChangeAvatar({
      events: {
        click: (e) => closeModal(e, 'changeAvatar'),
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePage;
