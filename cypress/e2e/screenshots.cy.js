describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.viewport(645, 1398)
    cy.screenshot("test", { overwrite: true, capture: 'fullPage' });
  })
})