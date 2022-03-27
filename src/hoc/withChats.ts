import withStore from './withStore';

import { IState } from '@/store/Store';

export const withChats = withStore((state: IState) => {
  return { chats: { ...state.chats } };
});
