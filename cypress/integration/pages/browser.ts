import * as constants from '../../support/constants';
import { Utils } from './utils';

export class Browser {

  private static awaitedRoutes: WaitRouteDefinition[] = new Array<WaitRouteDefinition>();

  public static visit(location: string) {
    cy.visit(location);
  }

  public static reload() {
    cy.reload();
  }

  public static DeleteAccessToken() {
    window.localStorage.removeItem(constants.OIDC_USER);
  }

  public static setupAwaitedRoutes(routes: RouteDefinition[]) {
    this.awaitedRoutes = [];

    routes.forEach((route, index) => {
      const alias = `${index}-${route.method}-${route.url}-${Utils.randomNumber()}`;

      cy.intercept({
        method: route.method,
        url: route.url
      }).as(alias);

      this.awaitedRoutes.push(new WaitRouteDefinition(alias));
    });
  }

  public static waitForRoutes(callbackFunc?: Function) {
    if (callbackFunc) {
      callbackFunc();
    }

    this.awaitedRoutes.forEach((route) => {
      cy.wait(`@${route.alias}`).then(xhr => {
        if (route.callback) {
          route.callback(xhr.response?.body);
        }
      });
    });

    this.awaitedRoutes = new Array<WaitRouteDefinition>();
  }

}


class RouteDefinition {
  public method: string;
  public url: string | RegExp;

  constructor() {
    this.method = '';
    this.url = '';
  }
}

class WaitRouteDefinition {
  public alias: string;
  public callback?: Function;

  constructor(alias: string, callback?: Function) {
    this.alias = alias;
    this.callback = callback;
  }
}

class RequestResponseDefinition {
  public routeDefinition: RouteDefinition;
  public callback: Function;

  constructor() {
    this.routeDefinition = new RouteDefinition();
    this.callback = () => { };
  }
}