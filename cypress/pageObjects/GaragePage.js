import BasePage from "./BasePage";

export default class GaragePage extends BasePage {

    garageMainLabel() {
        cy.get(`//h1[normalize-space()='Garage']`);
    }

    garageMainMenuTab() {
        return cy.get(`//a[@class='btn header-link -active' and contains(text(),'Garage')]`);
    }

    fuelExpensesMainMenuTab() {
        return cy.get(`//a[@class='btn header-link' and contains(text(),'Fuel expenses')]`);
    }

    instructionsMainMenuTab() {
        return cy.get(`//a[@class='btn header-link' and contains(text(),'Instructions')]`);
    }

    myProfileMainMenuDropdown() {
        return cy.get(`#userNavDropdown`);
    }

    addCarButton() {
        return cy.get(`//button[@class='btn btn-primary' and contains(text(), 'Add car')]`);
    }

    garageSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn -active' and contains(text(),' Garage ')]`);
    }

    garageSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn -active' and contains(text(),' Garage ')]`);
    }

    fuelExpensesSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn'][normalize-space()='Fuel expenses']`);
    }

    instructionsSideMenuTab() {
        return cy.get(`.btn.btn-white.btn-sidebar.sidebar_btn[routerlink='instructions']`);
    }

    profileSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn -profile' and normalize-space()='Profile']`);
    }

    settingsSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn' and normalize-space()='Settings']`);
    }

    logOutSideMenuTab() {
        return cy.get(`//a[@class='btn btn-link text-danger btn-sidebar sidebar_btn' and normalize-space()='Log out']`);
    }
    //dropdown. we probably need click()
    garageMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link disabled' and normalize-space()='Garage']`);
    }

    fuelExpensesMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Fuel expenses']`);
    }

    instructionsMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Instructions']`);
    }

    profileMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Profile']`);
    }

    settingsMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Settings']`);
    }

    logOutMainMenuDropDown() {
        return cy.get(`//button[@class='dropdown-item btn btn-link user-nav_link']`);
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

    addCarButtonInsideModal() {
        return cy.get(`//button[normalize-space()='Add'][@class='btn btn-primary']`);
    }

    CancelCarAddingButtonInsideModal() {
        return cy.get(`//button[normalize-space()='Cancel'][@class='btn btn-secondary']`);
    }

    addFuelExpenseButton() {
        return cy.get('.car_add-expense.btn.btn-success');
    }

    updateMileageInput() {
        return cy.get(`input[name='miles'][class*='update-mileage-form_input']`);
    }

    removeCarButton() {
        return cy.get(`//button[normalize-space()='Remove car'][@class='btn btn-outline-danger']`);
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
    userMyProfileMainDropDown() {
        return cy.get(`[aria-labelledby="userNavDropdown"]`);
    }
    
    userMyProfileMainDropDownOptions(option) {
        return cy.get(`.user-nav_menu-group > a`).contains(`${option}`);
    }


}
export const garagePage = new GaragePage;