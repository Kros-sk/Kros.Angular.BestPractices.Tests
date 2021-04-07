export class IdentityServerPage {

  public static clickCreateNewAccountLink() {
    cy.get('[data-test=create-new-account-link]').click();
  }

  public static clickCreateNewAccount() {
    cy.get('[data-test=create-new-account]').click();
  }

  public static clickLogin() {
    cy.get('[data-test=log-in]').click();
  }

  public static clickReturnToApp() {
    cy.get('[data-test=return-url]').click();
  }

  public static clickChange() {
    cy.get('[data-test=change-account]').click();
  }

  public static fillUserRegistrationData(userEmail: string, userPassword: string, confirmPassword: string) {
    if (userEmail) cy.get('[data-test=email-user]').type(userEmail);
    if (userPassword) cy.get('[data-test=password-user]').type(userPassword);
    if (confirmPassword) cy.get('[data-test=repeat-password-user]').type(confirmPassword);
  }

  public static fillUserLoginData(userEmail: string, userPassword: string) {
    if (userEmail) cy.get('[data-test=email-user]').type(userEmail);
    if (userPassword) cy.get('[data-test=password-user]').type(userPassword);
  }

  public static fillChangePassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    if (oldPassword) cy.get('[data-test=password-user]:nth(0)').type(oldPassword);
    if (newPassword) cy.get('[data-test=password-user]:nth(1)').type(newPassword);
    if (confirmPassword) cy.get('[data-test=repeat-password-user]').type(confirmPassword);
  }

  public static shouldHasOrigin(origin: string) {
    cy.location('host').should('eq', origin);
  }

  public static registerPageShouldHasPathName(pathName: string) {
    cy.location('pathname').should('eq', pathName);
  }

  public static registerPageContainsRegisterButton() {
    cy.get('[data-test=change-account]').should('exist');
  }

  public static afterRegistrationShouldSeeInfoMessage() {
    cy.get('[data-test=create-account-info-message]').should('have.html', 'Váš účet je vytvorený!');
  }

  public static afterRegistrationShouldSeeUserExistsInfoMessage() {
    cy.get('[data-test=user-exists-info-message]').should('have.html', 'Používateľ už existuje');
  }

  public static afterBadRegistrationShouldSeeErrorMessage() {
    cy.get('.text-danger.validation-summary-errors').should('exist');
  }

  public static afterLoginShouldSeeInfoMessage() {
    cy.get('h1').should('have.html', 'Zmena hesla');
  }
}  