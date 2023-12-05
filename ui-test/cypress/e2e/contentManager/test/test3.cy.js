/// <reference types="cypress" />

describe('BEANS', () => {
    beforeEach(() => {
      cy.visit('https://en.wikipedia.org/wiki/Bean')
    })
  
    it('PODS', () => {
        cy.get('.todo-list li').should('have.length', 10)
    })
    it('PODS', () => {
        cy.get('.todo-list li').should('have.length', 10)
    })
    it('PODS', () => {
        cy.get('.todo-list li').should('have.length', 10)
    })
    it('PODS', () => {
        cy.log(10)
    })

    
  })