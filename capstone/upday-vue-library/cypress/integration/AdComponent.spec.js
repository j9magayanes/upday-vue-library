// cypress/integration/AdComponent.spec.js
import { mount } from '@vue/test-utils';

describe('AdComponent', () => {
  it('renders Web Ad', () => {
    cy.visit('/'); // Change the URL to your application's URL

    // Mount the AdComponent with the Web args
    mountAdComponent('Web');

    // Your assertions here
    cy.get('.ad-block') // Replace with the actual selector used in your component
      .should('be.visible')
      .and('have.attr', 'title', 'web');
  });

  it('renders Huawei Ad', () => {
    cy.visit('/'); // Change the URL to your application's URL

    // Mount the AdComponent with the Huawei args
    mountAdComponent('Huawei');

    // Your assertions here
    cy.get('.ad-block') // Replace with the actual selector used in your component
      .should('be.visible')
      .and('have.attr', 'title', 'huawei');
  });

  // Add similar tests for Samsung and Oppo
});

function mountAdComponent(type) {
  cy.get(`[data-cy=${type}]`).click(); // Assuming there is a data-cy attribute on each ad type
}
