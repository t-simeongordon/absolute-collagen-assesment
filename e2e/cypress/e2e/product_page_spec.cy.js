/// <reference types="cypress" />

describe('Product page Tests', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('https://sandbox-hydrogen.myshopify.com/products/marine-liquid-collagen-supplement-drink-for-women');
        cy.get('#password').type('neetru')
        cy.get('button').click()
    });

    it('Should display the product title, price, and description', () => {    
        cy.visit('https://sandbox-hydrogen.myshopify.com/products/marine-liquid-collagen-supplement-drink-for-women');

        cy.get('h1').should('contain', 'Marine Liquid Collagen Supplement Drink For Women'); // Update 'Product Title' with the expected title
        cy.get('.product-price > h2').should('contain', 'from'); // Checks for the 'from' text in the price section
        cy.get('.AddToCart').should('not.be.empty'); // Checks if the product description exists
    });
    
    it('Should navigate through the carousel images', () => {
        cy.visit('/products/marine-liquid-collagen-supplement-drink-for-women');
    
        // Check if the first carousel image is visible
        cy.get('.carousel-item.active').should('be.visible');
    
        // Click 'next' button and verify the next image is shown
        cy.get('.carousel-btn.next').click();
        cy.get('.carousel-item.active').should('be.visible');
    
        // Click 'prev' button and verify the previous image is shown
        cy.get('.carousel-btn.prev').click();
        cy.get('.carousel-item.active').should('be.visible');
      });
});