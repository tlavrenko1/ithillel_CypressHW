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
        return cy.visit('/');
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
}

export const generalStep = new GeneralStep();