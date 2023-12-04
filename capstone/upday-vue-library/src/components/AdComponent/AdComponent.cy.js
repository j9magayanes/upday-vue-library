import AdComponent from './AdComponent.vue'

describe('<AdComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AdComponent)
  })
})

