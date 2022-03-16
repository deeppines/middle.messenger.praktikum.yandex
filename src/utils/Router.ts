import Block from './Block';
import Route from './Route';

import { APP_SELECTOR } from '@/constants';

export default class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history = window.history;
  private currentRoute: Route | null = null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    Router.__instance = this;
  }

  public use(pathname: string | string[], block: typeof Block) {
    if (Array.isArray(pathname)) {
      pathname.map((path) => {
        const route = new Route(path, block, { rootQuery: APP_SELECTOR });

        this.routes.push(route);
      });
    } else {
      const route = new Route(pathname, block, { rootQuery: APP_SELECTOR });

      this.routes.push(route);
    }

    return this;
  }

  public start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) return;
    if (this.currentRoute) this.currentRoute.leave();

    this.currentRoute = route;

    route.render();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: new Router() });
    }
  };
}
