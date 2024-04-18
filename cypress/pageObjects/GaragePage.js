import BasePage from "./BasePage";

export default class GaragePage extends BasePage {

    garageMainLabel() {
        return cy.get(`//h1[normalize-space()='Garage']`);
    }

    addCarButton() {
        return cy.get(`//button[@class='btn btn-primary' and contains(text(), 'Add car')]`);
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
        return cy.get(`#addCarBrand`);
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
        return cy.get(`div.modal-content`).find(`button.btn.btn-primary`);
    }

    carAddedPopUp() {
        return cy.get(`//p[normalize-space()='Car added']`);
    }

    CancelCarAddingButtonInsideModal() {
        return cy.get(`//button[normalize-space()='Cancel'][@class='btn btn-secondary']`);
    }

    addFuelExpenseButton() {
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

    editCarInfoButton() {
        return cy.get(`.car-item:nth-child(${number})`).find(`button[type='submit']`);
    }

    removeCarButton() {
        return cy.get(`div.modal-content`).find(`button.btn.btn-outline-danger`);
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

}
export const garagePage = new GaragePage;