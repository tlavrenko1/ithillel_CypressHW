export default class HomePage {
    static get logout() {
        return cy.get('span.icon-logout', {timeout: 10000});
    }
}

export const homePage = new HomePage;