import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given('navštívim stránku Krosu', () => {
  cy.visit('https://www.kros.sk');
});

When('kliknem na odkaz ZPK', () => {
  cy.get('.modreplnebez').click();
  cy.get('.bieleplne').click();
});

Then('budem na stránke imoz.kros.sk', () => {
  cy.location('host').should('contain', 'login.kros.sk');
  cy.location('pathname').should('contain', '/Account/Login');
});