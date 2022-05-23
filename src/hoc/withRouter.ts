import Block from 'src/utils/Block';

import router from 'src/router/Router';

function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: router });
    }
  };
}

export default withRouter;
