import { Browser } from "../browser";

export class Todos {

    private static All: string = "All";
    private static Active: string = "Active";
    private static Completed: string = "Completed";

    private static todoName: string;
    private static todoDesc: string;

    static typeInNewTodoFields(todoName: string, todoDesc: string) {
        cy.get('[data-test=add-todo-item-name]').clear().type(todoName);
        cy.get('[data-test=add-todo-item-description]').clear().type(todoDesc);
    
        Browser.setupAwaitedRoutes([
            {method: 'POST', url: /organizations\/\d+\/ToDos/ }
        ]);
        cy.get('[data-test=add-todo-item-button]').click({force: true});
        Browser.waitForRoutes();
    }

    static clickAtTodoTab() {
        cy.get('[data-test=app-component-todo-list-menu]').click({ force: true });
    }

    static deleteAllTodos() {
        cy.get('[data-test=todo-list-all-items]').then((container) => {
            if (container.children().length) {
                // Info about multiple parameters: https://docs.cypress.io/api/commands/click.html#Click-all-buttons-found-on-the-page
                cy.get('[data-test=todo-item-delete-button]').click({ multiple: true, force: true });
                cy.get('[data-test=todo-list-group-item]').should('have.length', 0);
            }
        })
    }
}