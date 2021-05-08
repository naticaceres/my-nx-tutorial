describe('todos', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('my-nx-tutorial-root').should('exist');
  });
});
