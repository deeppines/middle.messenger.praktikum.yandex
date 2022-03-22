import Block from '@/utils/Block';
import { closeModal } from '@/utils/helpers';

import Icon from '@/ui/elements/icon/icon';
import ChangeAvatar from '@/ui/components/change-avatar/change-avatar';
import Profile from '@/ui/components/profile/profile';

import template from './profile.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import UserController from '@/controllers/UserController';
class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profile = new Profile({});

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });

    this.childrens.changeAvatar = new ChangeAvatar({
      events: {
        click: (e) => closeModal('changeAvatar', e),
        submit: (e) => this.submitHandler(e),
      },
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    UserController.updateAvatar(formData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePage;
