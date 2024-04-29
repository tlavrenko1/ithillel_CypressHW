import BasePage, { basePage } from "../pages/BasePage";

export default class GaragePage extends BasePage {

    garageMainLabel() {
        return cy.get(`//h1[normalize-space()='Garage']`);
    }

    addCarButton() {
        return cy.get(`.btn.btn-primary`);
    }

    addACarModal() {
        return cy.get(`//h4[@class='modal-title']`);
    }

    addCarBrandLabel() {
        return cy.get(`//h4[@class='modal-title']`);
    }

    addCarBrandDropDown() {
        return cy.get(`#addCarBrand`);
    }

    addCarModelLabel() {
        return cy.get(`label[for='addCarModel']`);
    }

    addCarModelDropDown() {
        return cy.get(`#addCarModel`);
    }

    addCarMileageLabel() {
        return cy.get(`label[for='addCarModel']`);
    }

    addCarMileageInput() {
        return cy.get(`#addCarMileage`);
    }

    mileageLabel() {
        return cy.get(`.input-group-text`);
    }

    addCarButtonInsideModal() {
        return  this.modalContent().find(`button.btn.btn-primary`);
    }

    carAddedPopUp() {
        return cy.get(`//p[normalize-space()='Car added']`);
    }

    CancelCarAddingButtonInsideModal() {
        return cy.get(`//button[normalize-space()='Cancel'][@class='btn btn-secondary']`);
    }

    addFuelExpenseButton(number) {
        return cy.get(`.car-item:nth-child(${number})`).find('.car_add-expense.btn.btn-success');
    }

    addedCarsRecords(number) {
        return cy.get(`.car-item:nth-child(${number})`);
    }

    updateMileageInput(number) {
        return cy.get(`.car-item:nth-child(${number})`).find(`button.car_add-expense`);
    }

    updateMileageButton(number) {
        return cy.get(`.car-item:nth-child(${number})`).find(`button[type='submit']`);
    }

    getCarCard(car) {
        return cy.get('app-car').contains(`${car.brand} ${car.model}`);
    }

    editLastAddedCarInfoButton() {
        return cy.get(`.car_edit.btn.btn-edit`).first();
    }

    removeCarButton() {
        return this.modalContent().find(`.btn.btn-outline-danger`);
    }

    

    removeCarModal() {
        return cy.get(`//h4[@class='modal-title']`);
    }

    removeBottonOnCarModal() {
        return cy.get(`//button[normalize-space()='Remove']`);
    }

    cancelBottonOnCarModal() {
        return cy.get(`button[class='btn btn-secondary']`);
    }

    youDontHaveCarsMessage() {
        return cy.get(`.h3.panel-empty_message`);
    }

    static get saveCarButton() {
        return cy.get('//button[normalize-space()="Save"]');
    }

    get datePicker() {
        return cy.get(`.btn.date-picker-toggle`);
    }

    findElementByValue(value) {
        return cy.contains(value);
    }

}
export const garagePage = new GaragePage();