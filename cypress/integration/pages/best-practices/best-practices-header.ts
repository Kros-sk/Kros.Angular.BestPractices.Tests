import { Browser } from "../browser";

export class BestPracticesHeader {

    public static clickAtOgranizations() {
        Browser.setupAwaitedRoutes([
            {method: 'GET', url: /organizations/ }
        ]);

        cy.get('[data-test=app-component-todo-organizations-menu]').click({ force: true });

        Browser.waitForRoutes();
    }
}