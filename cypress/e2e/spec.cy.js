describe('template spec', () => {
    it('passes for matching screenshot', () => {
        cy.visit('https://example.cypress.io')

        cy.matchImage({screenshotConfig: {capture: 'viewport'}});
    })

    it('fails for mismatching screenshot', () => {
        cy.visit('https://example.cypress.io')

        cy.matchImage({screenshotConfig: {capture: 'viewport'}});
    })
})
