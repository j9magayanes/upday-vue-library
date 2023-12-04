import AdImage from './AdImage.vue'

describe('<AdImage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AdImage)
  })
})