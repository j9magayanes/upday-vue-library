describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:6006/?path=/story/components-adcomponent--web&globals=backgrounds.value:!hex(F8F8F8)')
  })
})