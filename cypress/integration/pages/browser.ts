import * as constants from '../../support/constants';

export class Browser {

  private static awaitedRouteAliases: string[] = new Array<string>();

  public static visit(location: string) {
    cy.visit(location);
  }

  public static reload() {
    cy.reload();
  }

  public static DeleteAccessToken() {
    window.localStorage.removeItem(constants.OIDC_USER);
  }

}