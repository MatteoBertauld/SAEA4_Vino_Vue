describe('Page d\'accueil', () => {

  beforeEach(() => {
    cy.visit('/') 
    cy.on('uncaught:exception', (err, runnable) => { return false; })
  })

  it('affiche les blocs de navigation principaux', () => {
    cy.get('.homepage-image').should('have.length', 3)
    cy.get('.homepage-image').eq(0).should('contain', 'Route des vins')
    cy.get('.homepage-image').eq(1).should('contain', 'Sejour')
    cy.get('.homepage-image').eq(2).should('contain', 'Partenaire')
  })

  it('redirige vers /travels au clic sur le bloc Sejour', () => {
    cy.get('.homepage-image').contains('Sejour').click()
    cy.url().should('include', '/travels')
  })

  it('redirige vers /routedesvins au clic sur le bloc Route des vins', () => {
    cy.get('.homepage-image').contains('Route des vins').click()
    cy.url().should('include', '/routedesvins')
  })

  it('redirige vers /partenaires au clic sur le bloc Partenaire', () => {
    cy.get('.homepage-image').contains('Partenaire').click()
    cy.url().should('include', '/partenaires')
  })

  it('affiche jusqu\'à 3 avis de voyages', () => {
    cy.get('.homepage-avis-container').should('have.length.lte', 3)
    cy.get('.homepage-avis-travel').should('exist')
    cy.get('.homepage-avis-note-valeur').each(note => {
      const text = note.text()
      expect(text).to.match(/^[1-5]\/5$/)
    })
  })

  it('les étoiles d\'avis correspondent à la note', () => {
    cy.get('.homepage-avis-container').each($avis => {
      cy.wrap($avis).find('.fa-solid.fa-star').its('length').then(starCount => {
        cy.wrap($avis).find('.homepage-avis-note-valeur').invoke('text').then(text => {
          const note = parseInt(text.split('/')[0])
          expect(starCount).to.eq(note)
        })
      })
    })
  })

  it('le bouton découvrir tous les avis redirige vers /opinions/', () => {
    cy.get('#homepage-button-avis').click()
    cy.url().should('include', '/opinions')
  })

})
