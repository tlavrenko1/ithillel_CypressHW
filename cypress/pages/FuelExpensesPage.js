import BasePage from "./BasePage";

export default class FuelExpensesPage extends BasePage {

    addAnExpense() {
        return cy.get(`button.btn.btn-primary`);
    }

    fuelExpensesDropDown() {
        return cy.get(`#carSelectDropdown`);
    }

    fuelExpensesLabel() {
        return cy.get(`div[class='panel-page_heading d-flex flex-column flex-lg-row'] h1`);
    }

    addExpenseModal() {
        return cy.get(`.modal-title`);
    }

    vehicleExpenseLabel() {
        return cy.get(`label[for='addExpenseCar']`);
    }

    vehicleExpenseDropDown() {
        return cy.get(`//select[@id='addExpenseCar']`);
    }

    expenseReportDateLabel() {
        return cy.get(`//label[@for='addExpenseDate']`);
    }

    expenseReportDateInput() {
        return cy.get(`//input[@id='addExpenseDate']`);
    }

    expenseReportDateDatePicker() {
        return cy.get(`//span[@class='icon icon-calendar']`);
    }

    expenseMileageInput() {
        return cy.get(`#addExpenseMileage`);
    }

    expenseNumberOfLitersLabel() {
        return cy.get(`label[for='addExpenseLiters']`);
    }

    expenseNumberOfLitersInput() {
        return cy.get(`#addExpenseLiters`);
    }

    expenseTotalCostInput() {
        return cy.get(`#addExpenseTotalCost`);
    }

    generalAddButton() {
        return `.btn.btn-primary`;
    }

    cancelExpenseAddingButton() {
        return cy.get(`//button[normalize-space()='Cancel']`);
    }

    findPropperRecordInFuelExpencesTable(number) {
        return cy.get(`table.table.expenses_table tbody tr:nth-child(${number})`);
    }

    editPropperRecordInFuelExpencesTable(number) {
        return cy.get(`table.table.expenses_table tbody tr:nth-child(${number})`)
            .find(`//button[@class='btn btn-edit']`);
    }

    removeEntryModal() {
        return cy.get(`//div[@class='modal-content']`);
    }

    removeFuelRecord() {
        return cy.get('.btn.btn-delete').first();
    }

    closeRemoveEntryModalBotton() {
        return cy.get(`//button[@class='close']`);
    }

    removeEntryModalBotton() {
        return cy.get(`button[class='btn btn-danger']`);
    }

    fuelExpensesTable() {
        return cy.get(`.table.expenses_table`);
    }

    checkThatFuelExpensePageIsEmpty() {
        return cy.get(`.panel-page_empty.panel-empty`).should('be.visible');
    }
}
export const fuelExpensesPage = new FuelExpensesPage;