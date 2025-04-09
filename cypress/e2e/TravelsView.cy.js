describe('Vue des séjours', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/travels')
  })

  it('doit afficher la liste des séjours', () => {
    cy.get('#travels-container-travel')
      .children()
      .should('exist') 
  })

  it('doit afficher et fermer le formulaire d\'ajout de séjour', () => {
    cy.get('#travels-addTravel').click()
    cy.get('#travels-container-addRoad-View').should('be.visible')
    cy.get('#travels-CloseAddRoadView').click()
    cy.get('#travels-container-addRoad-View').should('not.exist')
  })

  it('doit filtrer les séjours par vignoble', () => {
    cy.get('#travels-vineryFilter').select(5) 
    cy.get('#travels-container-travel').children().should('exist')
  })
  it('doit filtrer les séjours par localite', () => {
    cy.get('#travels-vineryFilter').select(3) 
    cy.get('#travels-locationFilter').select(2) 
    cy.get('#travels-container-travel').children().should('exist')
  })
  it('doit filtrer les séjours par duree', () => {
    cy.get('#travels-timeFilter').select(2)
    cy.get('#travels-container-travel').children().should('exist')
  })
  it('doit filtrer les séjours par cible', () => {
    cy.get('#travels-targetFilter').select(2) 
    cy.get('#travels-container-travel').children().should('exist')
  })
  it('doit filtrer les séjours par thème', () => {
    cy.get('#travels-vineryFilter').select(4) 
    cy.get('#travels-container-travel').children().should('exist')
  })

  it('doit afficher le filtre localité si des localités sont disponibles', () => {
    cy.get('#travels-vineryFilter').select(1)
    cy.get('#travels-locationFilter').should('be.visible')
  })

})