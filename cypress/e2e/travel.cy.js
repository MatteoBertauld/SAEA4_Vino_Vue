describe('Formulaire de séjour', () => {
  beforeEach(() => {
    // Visiter la page qui contient ton formulaire
    cy.visit('http://localhost:5173/travels')
  })

  it('doit remplir et soumettre le formulaire pour ajouter un séjour', () => {
    const travelData = {
      titresejour: 'Séjour Test',
      descriptionsejour: 'Une description géniale pour ce séjour',
      prixsejour: 100,
      idduree: 7,
      idlocalite: 5,
      idtheme: 3,
      idcategorieparticipant: 2,
      idcategorievignoble: 4,
      idcategoriesejour: 1,
      photosejour: 'NOIMAGE.jpg'  // Image par défaut
    }

    // Remplir les champs
    cy.get('input[placeholder="Titre du séjour"]').type(travelData.titresejour)
    cy.get('textarea[placeholder="Description du séjour"]').type(travelData.descriptionsejour)
    cy.get('input[placeholder="Prix du séjour"]').type(travelData.prixsejour)
    cy.get('input[placeholder="Durée du séjour (en jours)"]').type(travelData.idduree)
    cy.get('input[placeholder="ID de la localité"]').type(travelData.idlocalite)
    cy.get('input[placeholder="ID du thème"]').type(travelData.idtheme)
    cy.get('input[placeholder="ID de la catégorie de participants"]').type(travelData.idcategorieparticipant)
    cy.get('input[placeholder="ID de la catégorie du vignoble"]').type(travelData.idcategorievignoble)
    cy.get('input[placeholder="ID de la catégorie du séjour"]').type(travelData.idcategoriesejour)

    // Vérifier que la valeur est bien remplie dans le champ
    cy.get('input[placeholder="Titre du séjour"]').should('have.value', travelData.titresejour)

    // Simuler l'upload d'une image
    const imageFile = 'image-test.jpg' // Image que tu vas utiliser pour tester
    cy.fixture(imageFile).then(fileContent => {
      cy.get('input[type="file"]').upload({ fileContent, fileName: imageFile, mimeType: 'image/jpg' })
    })
    
    // Vérifier que l'image est prévisualisée
    cy.get('#preview-img').should('have.attr', 'src').and('include', 'data:image/jpeg;base64')

    // Soumettre le formulaire
    cy.get('.button-travel').click()

    cy.get('.success-message').should('contain', 'Séjour ajouté avec succès')
  })

  it('doit afficher une erreur si les champs obligatoires sont manquants', () => {
    // Soumettre le formulaire avec des champs manquants
    cy.get('.button-travel').click()

    // Vérifier que des messages d'erreur apparaissent
    cy.get('.error-message').should('contain', 'Tous les champs sont obligatoires')
  })

  it('doit permettre de modifier un séjour', () => {
    // Simuler l’édition d’un séjour
    const newTravelData = {
      titresejour: 'Séjour Modifié',
      descriptionsejour: 'Nouvelle description du séjour',
      prixsejour: 120,
      idduree: 10,
      idlocalite: 6,
      idtheme: 4,
      idcategorieparticipant: 3,
      idcategorievignoble: 5,
      idcategoriesejour: 2
    }

    // Vérifier que le formulaire est déjà pré-rempli avec les anciennes valeurs
    cy.get('input[placeholder="Titre du séjour"]').should('have.value', 'Ancien Titre')

    // Remplir les nouveaux champs pour modifier
    cy.get('input[placeholder="Titre du séjour"]').clear().type(newTravelData.titresejour)
    cy.get('textarea[placeholder="Description du séjour"]').clear().type(newTravelData.descriptionsejour)
    cy.get('input[placeholder="Prix du séjour"]').clear().type(newTravelData.prixsejour)
    cy.get('input[placeholder="Durée du séjour (en jours)"]').clear().type(newTravelData.idduree)
    cy.get('input[placeholder="ID de la localité"]').clear().type(newTravelData.idlocalite)
    cy.get('input[placeholder="ID du thème"]').clear().type(newTravelData.idtheme)
    cy.get('input[placeholder="ID de la catégorie de participants"]').clear().type(newTravelData.idcategorieparticipant)
    cy.get('input[placeholder="ID de la catégorie du vignoble"]').clear().type(newTravelData.idcategorievignoble)
    cy.get('input[placeholder="ID de la catégorie du séjour"]').clear().type(newTravelData.idcategoriesejour)

    // Soumettre la modification
    cy.get('.button-travel').click()

    // Vérifier la redirection ou une confirmation
    cy.url().should('include', '/page-modification-succes')
    cy.get('.success-message').should('contain', 'Séjour modifié avec succès')
  })
})
