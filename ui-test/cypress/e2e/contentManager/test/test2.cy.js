/// <reference types="cypress" />

describe('BEANS', () => {
    beforeEach(() => {
      cy.visit('https://en.wikipedia.org/wiki/Bean')
    })
  
    it('BEANS', () => {
        cy.get('.todo-list li').should('have.length', 10)
    })

    it('BEAN3', () => {
        cy.log(10)
        cy.get('.todo-list li').should('have.length', 10)
    })
  })