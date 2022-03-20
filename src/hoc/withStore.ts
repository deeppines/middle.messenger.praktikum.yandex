import Block from '@/utils/Block';
import { isEqual } from '@/utils/helpers';

import store, { IState, StoreEvents } from '@/store/Store';

const withStore =
  (mapStateToProps: (state: IState) => Record<string, unknown>) => (Component: typeof Block) => {
    let state: Record<string, unknown>;

    return class extends Component {
      constructor(props: Record<string, unknown>) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({
              ...newState,
            });
          }
        });
      }
    };
  };

export default withStore;
