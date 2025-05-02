/// <reference types="cypress" />

context('Funcionalidade Login', () => {

  it.only('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain' , 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('wrl2_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

  })

  it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('123@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

  })

})