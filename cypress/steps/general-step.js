import {
    basePage
} from "../pages/BasePage";
import homePage from "../pages/HomePage";
import {
    garagePage
} from "../pages/GaragePage";
import { fuelExpensesPage } from "../pages/FuelExpensesPage";   


export default class GeneralStep {
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

    addAnExpense(day, month, year) {
        garagePage.addFuelExpenseButton(1).click();
        this.datePicker(day, month, year);
        fuelExpensesPage.expenseMileageInput().invoke('val').then((val) => {
            let number = parseInt(val)
            fuelExpensesPage.expenseMileageInput().clear().type(number = number + 1);
        })
        fuelExpensesPage.expenseNumberOfLitersInput().type('10');
        fuelExpensesPage.expenseTotalCostInput().type('100');
        fuelExpensesPage.modalContent().find(fuelExpensesPage.generalAddButton()).click();
    }
}

export const generalStep = new GeneralStep();