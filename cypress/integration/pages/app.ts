import { Browser } from "./browser";

export class App {

  public static existsLogoutButton() {
    cy.get('[data-test=app-component-logout-button]').should('exist');
  }

  public static visitAndWaitForApp() {
    Browser.setupAwaitedRoutes([
        {method: 'GET', url: /organizations\/\d+\/.*/ }
    ]);
    Browser.visit('/company/list');
    Browser.waitForRoutes();
  }

  // public static reloadAppAndGoToTodos() {
  //     Browser.setupAwaitedRoutes([
  //         {method: 'GET', url: /organizations/ }
  //     ]);
  //     Browser.reload();
  //     Browser.waitForRoutes();

  //     cy.wait(1000); // Waiting for loading app
  //     BestPracticesHeader.clickAtTodos();
  // }
}