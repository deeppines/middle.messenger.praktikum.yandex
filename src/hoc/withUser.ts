import withStore from './withStore';

import { IState } from '@/store/Store';

export const withUser = withStore((state: IState) => ({ ...state.currentUser }));
