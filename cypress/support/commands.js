Cypress.Commands.add('preencheFormulario', user => {
    cy.get('[id=firstName]')
        .type('João')
        .should('have.value', 'João')
    cy.get('#lastName')
        .type('Santos')
        .should('have.value', 'Santos')
    cy.get('#email')
        .type('joaoviniciuszds@gmail.com')
        .should('have.value', 'joaoviniciuszds@gmail.com')
    //cy.get('#phone-checkbox').check()
    cy.get('#open-text-area')
        .type('Preciso de ajuda', { delay: 0 })
        .should('have.value', 'Preciso de ajuda')
    cy.contains('button', 'Enviar')
        .should('have.class', 'button')
        .click()    
})