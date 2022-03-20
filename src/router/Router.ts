import Block from '../utils/Block';

import Route from './Route';

import { APP_SELECTOR, PagePaths } from '@/constants';

class Router {
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

  public use(pathname: string | string[], block: typeof Block, props?: any) {
    if (Array.isArray(pathname)) {
      pathname.map((path) => {
        const route = new Route(path, block, { ...props, rootQuery: APP_SELECTOR });

        this.routes.push(route);
      });
    } else {
      const route = new Route(pathname, block, { ...props, rootQuery: APP_SELECTOR });

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

    if (!route) {
      this.go(PagePaths.NotFound);

      return;
    }

    if (this.currentRoute) this.currentRoute.leave();

    this.currentRoute = route;

    route.render();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

const router = new Router();

export default router;
