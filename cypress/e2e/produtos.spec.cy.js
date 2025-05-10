/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

  beforeEach(() => {

    cy.visit('produtos')
  });
  it('Deve selecionar um produto', () => {
    cy.get('[class="product-block grid"]')
      //.first()
      //.last()
      //.eq(3)
      .contains('Abominable Hoodie')
      .click()
  });

  it.only('Deve adicionar um iten ao carrinho', () => {
    var quantidade = 3

    cy.get('[class="product-block grid"]')
    .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
    
  });
});
