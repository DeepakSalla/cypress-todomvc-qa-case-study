describe('Todo App - Positive Test', () => {
  it('should add, complete, and delete a task', () => {
    cy.visit('/');
    cy.get('.new-todo').type('Test Task{enter}');
    cy.contains('Test Task').should('exist');
    cy.get('.toggle').click();
    cy.get('.todo-list li').should('have.class', 'completed');
    cy.get('.destroy').invoke('show').click();
    cy.contains('Test Task').should('not.exist');
  });
});