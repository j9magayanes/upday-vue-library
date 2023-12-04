import ReadButton from './ReadButton.vue'

describe('<ReadButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ReadButton)
  })
})