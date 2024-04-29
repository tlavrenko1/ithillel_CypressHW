import {
  basePage
} from "../../pages/BasePage";
import {
  user
} from "../../fixtures/user";
import {
  createAccount,
  validateCreatedAccount
} from "../../handlers/userRegisterHandler";
import {
  generalStep
} from "../../steps/general-step";
import {
  garageStep
} from "../../steps/garage-step";
import {
  garagePage
} from "../../pages/GaragePage";
import {
  carData
} from "../../fixtures/carData";

const firstRandomCar = basePage.getRandomCar(carData);
let firstCar = {
  brand: firstRandomCar.brand,
  model: firstRandomCar.model,
  mileage: "100"
}

const secondRandomCar = basePage.getRandomCar(carData);
let secondCar = {
  brand: secondRandomCar.brand,
  model: secondRandomCar.model,
  mileage: "88"
}
describe("Test Suite", () => {

  before(() => {
    cy.visit('/');
    basePage.signUpButton().should('have.text', 'Sign up');
    basePage.signUpButton().should("exist").click();
    basePage.appSignupModal().should('be.visible');
    createAccount(user);
    validateCreatedAccount(user);
    cy.contains('Log out').should('exist').click();
  })

  beforeEach(() => {
    
    cy.visit('/');
    generalStep.login(user.email, user.password);
    cy.url().should('include', '/panel/garage');
    generalStep.verifyThatLogOutButtonIsVisible();
  })

  afterEach(() => {
    //cy.contains('Log out').should('exist').click();
  })

  after(() => {
    garageStep.deleteCarFromGarage();
  })
  it("Check that is possible to add new car to user garage", () => {
    garageStep.addNewCar(firstCar);
    garageStep.checkThatCarIsAdded(firstCar);
    generalStep.addAnExpense(
      basePage.getCurrentDate().currentDay,
      basePage.getCurrentDate().currentMonth,
      basePage.getCurrentDate().currentYear,
    );
  })

  it("Check that is possible to delete a car to user garage", () => {
    garageStep.addNewCar(secondCar);
    garageStep.checkThatCarIsAdded(secondCar);
    garageStep.deleteCarFromGarage();
    garageStep.checkThatCarIsDeleted(secondCar);
  })
})