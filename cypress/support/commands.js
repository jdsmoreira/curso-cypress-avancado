import 'cypress-localstorage-commands'

Cypress.Commands.add('assertLoadingIsShownAndHidden', () => {
  cy.contains('Loading ...').should('be.visible')
  cy.contains('Loading ...').should('not.exist')
})

Cypress.Commands.add('search', (text) => {
 cy.get('.interactions input').type(text)
 cy.get('.interactions button').click() 
})

Cypress.Commands.add('waitGetSearch', (query='React', page='0') => {
  //cy.intercept('GET', `**/search?query=${query}&page=${page}`).as('getSearch')
  cy.intercept({
    method: 'GET',
    pathname: '**/search',
    query: {
      query: query,
      page: page
    }
  }).as('getSearch')
  
  cy.wait('@getSearch')
})
