import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';


Given(`som všetko dobre nastavil`, () => {});

Then(`všetko funguje a otvorí mi Google!`, () => {
  cy.visit('https://www.google.com')
});

When('začnem vyhľadávať', () => {
  cy.get('#zV9nZe').click();
  cy.get('.gLFyf').type("Skúsim štastie{enter}");
})

Then('sa mi zobrazia výsledky', () => {
  cy.get('#rcnt');
});
