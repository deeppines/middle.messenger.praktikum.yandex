import Block from '@/utils/Block';
import Router from '@/utils/Router';

function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: new Router() });
    }
  };
}

export default withRouter;
