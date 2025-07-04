describe('Todo App - Negative Tests', () => {
  it('should not add an empty task', () => {
    cy.visit('/');
    cy.get('.new-todo').type('{enter}');
    cy.get('.todo-list li').should('not.exist');
  });

  it('should allow duplicate tasks (expected behavior)', () => {
    cy.visit('/');
    cy.get('.new-todo').type('Repeat Task{enter}');
    cy.get('.new-todo').type('Repeat Task{enter}');
    cy.get('.todo-list li').should('have.length', 2);
  });
});