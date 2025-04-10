describe('Page Route des vins', () => {

  beforeEach(() => {
    cy.visit('/routedesvins')
  })

  it('affiche le champ de recherche', () => {
    cy.get('.search-input').should('exist')
    cy.get('.search-input').should('have.attr', 'placeholder', 'Rechercher...')
  })

  it('filtre les routes en fonction de la recherche', () => {
    cy.get('.search-input').type('bourgogne')
    cy.get('#routes').within(() => {
      cy.contains('Aucun résultat').should('not.exist')
      cy.get('#route').should('exist')
    })

    cy.get('.search-input').clear()
    cy.get('#routes').should('have.length.greaterThan', 0)
  })

  it('affiche un message si aucun résultat', () => {
    cy.get('.search-input').type('qsdqsdqsdqsd')
    cy.get('#routes').should('contain', 'Aucun résultat')
  })

  it('toggle l\'affichage du formulaire d\'ajout de route', () => {
    cy.get('#addRoad').click()
    cy.get('#container-addRoad-View').should('be.visible')

    cy.get('#CloseAddRoadView').click()
    cy.get('#container-addRoad-View').should('not.exist')
  })
})
