import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { IdentityServerPage } from '../pages/identity-server/identity-server-page';
import { AppPage } from '../pages/app';

When('vyplním prihlasovacie údaje užívateľa, email: {string}, heslo: {string}', (email: string, password: string) => {
  IdentityServerPage.fillUserLoginData(email, password);
});

When('kliknem na tlačidlo prihlásiť', () => {
  IdentityServerPage.clickLogin();
});

Then('ma Identity server prihlásil', () => {
  AppPage.existsLogoutButton();
});
