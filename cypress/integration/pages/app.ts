export class AppPage {

  public static existsLogoutButton() {
    cy.get('[data-test=app-component-logout-button]').should('exist');
  }
}