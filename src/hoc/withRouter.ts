import Block from '@/utils/Block';

import router from '@/router/Router';

function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: router });
    }
  };
}

export default withRouter;
