import {
    basePage
} from "../pages/BasePage";
import homePage from "../pages/HomePage";
import {
    garagePage
} from "../pages/GaragePage";
import {
    fuelExpensesPage
} from "../pages/FuelExpensesPage";
import {
    createAccount,
    validateCreatedAccount
} from "../handlers/userRegisterHandler";
import {
    request
} from "../steps/requests";
import { utils } from "./api-utils";


export default class GeneralStep {

    confirmTheAction() {
        basePage.confirmButton().click();
    }

    signUpAsUser(user) {
        basePage.signUpButton().should('have.text', 'Sign up');
        basePage.signUpButton().should("exist").click();
        basePage.appSignupModal().should('be.visible');
        createAccount(user);
        validateCreatedAccount(user);
    }

    logout() {
        cy.contains('Log out').should('exist').click();
    }

    checkThatURLContains(url) {
        return cy.url().should('include', url);
    }
    openMainPage() {
        return cy.visit(Cypress.env('baseUrl'));
    }

    checkThatSignUpButtonExists() {
        return basePage.signUpButton().should('exist');
    }


    login(email, password) {
        basePage.findButtonByText('Sign In').click();
        basePage.signInEmai().type(email);
        basePage.signInPassword().type(password);
        basePage.findButtonByText('Login').click();
    }

    verifyThatLogOutButtonIsVisible() {
        homePage.logout.should('exist');
    }

    datePicker(day, month, year) {
        garagePage.datePicker.click();
        cy.get(`select[title='Select month']`).select(month);
        cy.get(`select[title='Select year']`).select(year);
        cy.get(`ngb-datepicker-month`).within(() => {
            cy.get(`div[ngbdatepickerdayview]`).contains(day).click();
        })
    }

    saveInterceptedRequestToFile(method, url, action) {
        cy.intercept(method, url).as('request');
        action();
        return cy.wait('@request').then((res) => {
            expect(res.response.statusCode).to.eq(201);
            let responseBody = res.response.body;
            cy.log('responseBody:', responseBody); // Log the response object
        
            const filePath = './cypress/fixtures/interceptedRequest.js';
            const fileContent = `export const interceptedRequest = ${JSON.stringify(responseBody, null, 2)};`;
            cy.writeFile(filePath, fileContent, 'utf-8');
            cy.log('File written successfully');

            return Cypress.Promise.resolve(responseBody.data);
        });

    }

    addExpense(date) {
        this.datePicker(date.currentDay, date.currentMonth, date.currentYear);
        fuelExpensesPage.expenseMileageInput().invoke('val').then((val) => {
            let number = parseInt(val);
            fuelExpensesPage.expenseMileageInput().clear().type(number = number + 1);
        });
        fuelExpensesPage.expenseNumberOfLitersInput().type('10');
        fuelExpensesPage.expenseTotalCostInput().type('100');
        fuelExpensesPage.modalContent().find(fuelExpensesPage.generalAddButton()).click();
    }

    signUpViaApi(user, email, pass){
        request.registerNewUserApi(user, email, pass).then((response) => {
            utils.validateStatusCode(response, 201);
        });
    }

    cleanCookies() {
        cy.clearCookies();
    }

    logInViaApi(email, pass) {
        request.loginViaApi(email, pass).then((response) => {
            utils.validateStatusCode(response, 200);
        })
    }

    logOutViaApi() {
        request.logOutViaApi().then((response) => {
            utils.validateStatusCode(response, 200);
        })
    }
}

export const generalStep = new GeneralStep();