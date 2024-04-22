import BasePage from "./BasePage";

export default class FuelExpenses extends BasePage {


    fuelExpensesMainLabel() {
        return cy.get(`div[class='panel-page_heading d-flex flex-column flex-lg-row']`);
    }

    addAnExpense() {
        return cy.get(`button.btn.btn-primary`);
    }

    linkToGaragePage() {
        return cy.get(`p[class='h3 panel-empty_message'] a}`);
    }

    dontHaveFuelLabel() {
        return cy.get(`.h3.panel-empty_message`);
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

    expenseMileageLabel() {
        return cy.get(`label[for='addExpenseMileage']`);
    }

    expenseMileageInput() {
        return cy.get(`//input[@id='addExpenseMileage']`);
    }

    expenseNumberOfLitersLabel() {
        return cy.get(`label[for='addExpenseLiters']`);
    }

    expenseNumberOfLitersInput() {
        return cy.get(`//input[@id='addExpenseLiters']`);
    }

    expenseTotalCostLabel() {
        return cy.get(`label[for='addExpenseTotalCost']`);
    }

    expenseTotalCostInput() {
        return cy.get(`//input[@id='addExpenseTotalCost']`);
    }

    addExpenseButton() {
        return cy.get(`//button[normalize-space()='Add']`);
    }

    cancelExpenseAddingButton() {
        return cy.get(`//button[normalize-space()='Cancel']`);
    }

    findPropperRecordInFuelExpencesTable(number) {
        return cy.get(`table.table.expenses_table tbody tr:nth-child(${number})`);
    }

    deletePropperRecordInFuelExpencesTable(number) {
        return cy.get(`table.table.expenses_table tbody tr:nth-child(${number})`)
            .find(`//button[@class='btn btn-delete']`);
    }

    editPropperRecordInFuelExpencesTable(number) {
        return cy.get(`table.table.expenses_table tbody tr:nth-child(${number})`)
            .find(`//button[@class='btn btn-edit']`);
    }

    removeEntryModal() {
        return cy.get(`//div[@class='modal-content']`);
    }

    removeEntryModalLabel() {
        return cy.get(`//h4[@class='modal-title']`);
    }

    closeRemoveEntryModalBotton() {
        return cy.get(`//button[@class='close']`);
    }

    cancelRemoveEntryModalBotton() {
        return cy.get(`button[class='btn btn-secondary']`);
    }

    removeEntryModalBotton() {
        return cy.get(`button[class='btn btn-danger']`);
    }

    fuelExpencesPopUp() {
        return cy.get(`div[class='alert alert-success'] p`);
    }

}
export const fuelExpenses = new FuelExpenses;