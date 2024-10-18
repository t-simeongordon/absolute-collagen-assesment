/// <reference types="cypress" />

describe('Homepage Tests', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('https://sandbox-hydrogen.myshopify.com/');
    cy.get('#password').type('neetru')
    cy.get('button').click()
  });


  it('Should display the correct main title', () => {
    cy.get('.home-overview-container h1')
      .should('be.visible')
      .and('contain', 'Marine Liquid Collagen Drink For Women');
  });

  it('Should have a Subscribe button that is clickable', () => {
    cy.get('.home-overview-container .home-subscribe-button button')
      .should('be.visible')
      .and('contain', 'Subscribe')
      .click();
  });

  it('Should display the promotion titles correctly', () => {
    cy.get('.home-promotion-item').eq(0).find('h2')
      .should('contain', 'CLINICALLY PROVEN');

    cy.get('.home-promotion-item').eq(1).find('h2')
      .should('contain', '100% SAW IMPROVEMENT');

    cy.get('.home-promotion-item').eq(2).find('h2')
      .should('contain', '8000MG OF COLLAGEN');
  });
});
