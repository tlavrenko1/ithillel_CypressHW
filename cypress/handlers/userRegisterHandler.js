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
  basePage.myProfileMainMenuDropdown().should('be.visible')
    .should('have.text', ' My profile ')
    .click();
  basePage.userMyProfileMainDropDown().should('be.visible');
  basePage.userMyProfileMainDropDown().should('contain', 'Garage');
  basePage.userMyProfileMainDropDownOptions('Profile')
    .click();
  basePage.profileNameLabel().should('have.text', `${user.name} ${user.lastName}`);
}