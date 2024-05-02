export class Requests {
 
    registerNewUserApi(user, randomEmail, randomPass) {
        const requestOptions = {
            method: 'POST',
            url: Cypress.config('apiUrl') + '/auth/signup',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "name": user.name,
                "lastName": user.lastName,
                "email": randomEmail,
                "password": randomPass,
                "repeatPassword": randomPass
              }
        }

        return cy.request(requestOptions);
    }

    getCarList() {
        const requestOptions = {
            method: 'GET',
            url: Cypress.config('apiUrl') + '/cars',
            headers: { 'Content-Type': 'application/json' },
        }
        return cy.request(requestOptions);
        
    }


}