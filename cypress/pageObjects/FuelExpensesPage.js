import BasePage from "./BasePage";

export default class FuelExpenses extends BasePage {


    fuelExpensesMainLabel() {
        return cy.get(`div[class='panel-page_heading d-flex flex-column flex-lg-row']`);
    }

    addAnExpense() {
        cy.get(`button.btn.btn-primary`);
    }

    linkToGaragePage() {
        cy.get(`p[class='h3 panel-empty_message'] a}`);
    }




}
export const fuelExpenses = new FuelExpenses;