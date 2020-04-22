import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { BestPracticesHeader } from '../pages/best-practices/best-practices-header';
import { Todos } from '../pages/best-practices/todos';

Given('kliknem na záložku poznámky', () => {
    BestPracticesHeader.clickAtTodos();
});

Given('vymažem všetky poznámky', () => {
    cy.wait(300); // Waiting for add items to DOM
    Todos.deleteAllTodos();
});


When("vložím poznámky s týmito údajmi:", (dataTable) => {
    dataTable.rawTable.slice(1).forEach((row: string[]) => {
        Todos.typeInNewTodoFields(row[0], row[1]);
    });
});


Then('všetko funguje', () => {

});