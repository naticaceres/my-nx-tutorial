describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoitemcomponent--primary&knob-biggerTitle'));

  it('should render the component', () => {
    cy.get('my-nx-tutorial-todo-item').should('exist');
  });
});
