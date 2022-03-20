import { IUser } from '@/types';

import EventBus from './EventBus';
import { set } from './helpers';

export enum StoreEvents {
  Updated = 'updated',
}

export interface IState {
  currentUser?: IUser;
}

class Store extends EventBus {
  private state: IState = {};

  public getState() {
    return this.state;
  }

  public set(path: keyof IState, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export default store;
