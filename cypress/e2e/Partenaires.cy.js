describe('Page des partenaires', () => {
  beforeEach(() => {
    cy.visit('/partenaires') 
    cy.on('uncaught:exception', (err, runnable) => { return false; })
  })

  it('Affiche tous les partenaires par défaut', () => {
    cy.get('#partenaire-container').should('have.length.at.least', 1)
  })

  it(' filtre par restaurant', () => {
    cy.get('#partenaire-filtre-restaurant').click()
    cy.get('#partenaire-container').each(($el) => {
      cy.wrap($el).within(() => {
        cy.contains('Spécialite culinaire')
      })
    })
  })

  it(' filtre par hôtel', () => {
    cy.get('#partenaire-filtre-hotel').click()
    cy.get('#partenaire-container').each(($el) => {
      cy.wrap($el).within(() => {
        cy.contains('Nombre de chambres')
      })
    })
  })

  it(' filtre par cave', () => {
    cy.get('#partenaire-filtre-cave').click()
    cy.get('#partenaire-container').each(($el) => {
      cy.wrap($el).within(() => {
        cy.contains('Type de dégustation')
      })
    })
  })
  it(' filtre par autre societe', () => {
    cy.get('#partenaire-filtre-autresociete').click()
    cy.get('#partenaire-container').each(($el) => {
      cy.wrap($el).within(() => {
        cy.contains('Type de dégustation').should('not.exist')
        cy.contains('Spécialite culinaire').should('not.exist')
        cy.contains('Nombre de chambres').should('not.exist')
      })
    })
  })

  it('Affiche le composant d\'ajout quand on clique sur "+"', () => {
    cy.contains('Ajouter un partenaire').click()
    cy.get('#addRoadView').should('exist')
    cy.get('#CloseAddRoadView').click()
    cy.get('#addRoadView').should('not.exist')
  })

})
