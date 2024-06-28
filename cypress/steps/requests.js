import {
    generalStep
} from "./general-step";

export class Requests {

    registerNewUserApi(user, randomEmail, randomPass) {
        const requestOptions = {
            method: 'POST',
            url: Cypress.config('apiUrl') + '/auth/signup',
            headers: {
                'Content-Type': 'application/json'
            },
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

    loginViaApi(email, password) {
        const requestOptions = {
            method: 'POST',
            url: Cypress.config('apiUrl') + '/auth/signin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": email,
                "password": password,
                "remember": false
              }
        }
        return cy.request(requestOptions);
        
    }

    getCarList() {
        const requestOptions = {
            method: 'GET',
            url: Cypress.config('apiUrl') + '/cars',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return cy.request(requestOptions);

    }

    addExpenseToCar(carId, date, mileage, liters, totalCost) {
        const requestOptions = {
            method: 'POST',
            url: Cypress.config('apiUrl') + `/expenses`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "carId": carId,
                "reportedAt": date,
                "mileage": mileage,
                "liters": liters,
                "totalCost": totalCost,
                "forceMileage": false
            }
        }
        return cy.request(requestOptions);
    }

    logOutViaApi() {
        const requestOptions = {
            method: 'Get',
            url: Cypress.config('apiUrl') + '/auth/logout',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return cy.request(requestOptions);
    }

}

export const request = new Requests();