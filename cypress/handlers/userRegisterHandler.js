import {
  garagePage
} from "../pageObjects/GaragePage";
import {
  fuelExpenses
} from "../pageObjects/FuelExpensesPage";
import {
  basePage
} from "../pageObjects/BasePage";

export function createAccount(user) {
  basePage.signupName().type(user.name)
    .should('have.value', user.name)
    .should('have.focus');
  basePage.signupLastName().type(user.lastName)
    .should('have.value', user.lastName)
    .should('have.focus');
  basePage.signupEmail().type(basePage.generateUniqueEmail());
  basePage.signupPassword().should('be.visible');
  basePage.signupPassword().type(user.password);
  basePage.signupRepeatPassword().type(user.password)
    .should('have.value', user.password);
  basePage.registerButton().click();
}

export function validateCreatedAccount(user = {}) {
  basePage.validateCurrentUrl('/panel/garage');
  garagePage.myProfileMainMenuDropdown().should('be.visible')
    .should('have.text', ' My profile ')
    .click();
  garagePage.userMyProfileMainDropDown().should('be.visible');
  garagePage.userMyProfileMainDropDown().should('contain', 'Garage');
  garagePage.userMyProfileMainDropDownOptions('Profile')
    .click();
  cy.get('.profile_name').should('have.text', `${user.name} ${user.lastName}`);
}