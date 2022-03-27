import Block from '@/utils/Block';
import { closeModal } from '@/utils/helpers';

import Icon from '@/ui/elements/icon/icon';
import ChangeAvatarForm from '@/ui/components/form/ChangeAvatarForm/ChangeAvatarForm';
import ModalBackdrop from '@/ui/components/ModalBackdrop/ModalBackdrop';
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

    this.childrens.changeAvatar = new ModalBackdrop({
      id: 'changeAvatar',
      title: 'Загрузите файл',
      events: {
        click: (e) => closeModal('changeAvatar', e),
      },
      modalContent: new ChangeAvatarForm({
        events: {
          submit: (e) => this.submitHandler(e),
        },
      }),
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
