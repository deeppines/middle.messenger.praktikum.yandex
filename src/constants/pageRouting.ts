import { IPage } from '@/types';

import { PagePaths } from './pagePaths';

import ClientErrorPage from '@/pages/404/404';
import MessengerPage from '@/pages/messenger/messenger';
import PasswordPage from '@/pages/password/password';
import ProfilePage from '@/pages/profile/profile';
import SettingsPage from '@/pages/settings/settings';
import SigninPage from '@/pages/signin/signin';
import SignupPage from '@/pages/signup/signup';

export const PAGES: IPage[] = [
  {
    path: [PagePaths.Index, PagePaths.Signin],
    block: SigninPage,
    props: { title: 'Вход' },
  },
  {
    path: PagePaths.Signup,
    block: SignupPage,
    props: { title: 'Регистрация' },
  },
  {
    path: PagePaths.Messanger,
    block: MessengerPage,
    props: { title: 'Чат' },
  },
  {
    path: PagePaths.Profile,
    block: ProfilePage,
    props: { title: 'Профиль' },
  },
  {
    path: PagePaths.Settings,
    block: SettingsPage,
    props: { title: 'Профиль - настройки' },
  },
  {
    path: PagePaths.Password,
    block: PasswordPage,
    props: { title: 'Профиль - пароль' },
  },
  {
    path: PagePaths.NotFound,
    block: ClientErrorPage,
    props: { title: 'Page Not Found - 404' },
  },
];
