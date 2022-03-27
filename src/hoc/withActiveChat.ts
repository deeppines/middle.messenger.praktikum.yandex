import withStore from './withStore';

import { IState } from '@/store/Store';

export const withActiveChat = withStore((state: IState) => ({ ...state.activeChat }));
