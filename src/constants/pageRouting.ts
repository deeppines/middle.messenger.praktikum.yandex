import { IPage } from '@/types';

import MessengerPage from '@/pages/messenger/messenger';
import PasswordPage from '@/pages/password/password';
import ProfilePage from '@/pages/profile/profile';
import SettingsPage from '@/pages/settings/settings';
import SigninPage from '@/pages/signin/signin';
import SignupPage from '@/pages/signup/signup';

export const PAGES: IPage[] = [
  {
    path: ['/', '/signin'],
    block: SigninPage,
    props: { title: 'Вход' },
  },
  {
    path: '/signup',
    block: SignupPage,
    props: { title: 'Регистрация' },
  },
  {
    path: '/messenger',
    block: MessengerPage,
    props: { title: 'Чат' },
  },
  {
    path: '/profile',
    block: ProfilePage,
    props: { title: 'Профиль' },
  },
  {
    path: '/settings',
    block: SettingsPage,
    props: { title: 'Профиль - настройки' },
  },
  {
    path: '/password',
    block: PasswordPage,
    props: { title: 'Профиль - пароль' },
  },
];
