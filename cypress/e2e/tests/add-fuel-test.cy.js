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
   fuelExpensesPage
} from "../../pages/FuelExpensesPage";
import {
  carData
} from "../../fixtures/carData";
import {
  fuelExpensesStep
} from "../../steps/fuel-expenses-step";



const firstRandomCar = basePage.getRandomCar(carData);
let firstCar = {
  brand: firstRandomCar.brand,
  model: firstRandomCar.model,
  mileage: "100"
}

describe("Test Suite", () => {

  before(() => {
    cy.visit('/');
    basePage.signUpButton().should('have.text', 'Sign up');
    basePage.signUpButton().should("exist").click();
    basePage.appSignupModal().should('be.visible');
    createAccount(user);
    validateCreatedAccount(user);
    fuelExpensesPage.garageSideMenuTab().click();
    garageStep.addNewCar(firstCar);
    garageStep.checkThatCarIsAdded(firstCar);
    cy.contains('Log out').should('exist').click();
   
  })

  beforeEach(() => {
    cy.visit('/');
    generalStep.login(user.email, user.password);
    cy.url().should('include', '/panel/garage');
    generalStep.verifyThatLogOutButtonIsVisible();
  })

  afterEach(() => {
  })

  after(() => {
    fuelExpensesPage.garageSideMenuTab().click();
    garageStep.deleteCarFromGarage();
  })

  it("Check that is possible to delete fuel to the car", () => {
    garagePage.fuelExpensesSideMenuTab().click();
    generalStep.addAnExpense(
      basePage.getCurrentDate().currentDay,
      basePage.getCurrentDate().currentMonth,
      basePage.getCurrentDate().currentYear,
    );
    fuelExpensesStep.checkThatFuelExpenseIsAdded();
    garagePage.fuelExpensesSideMenuTab().click();
    fuelExpensesPage.removeFuelRecord().click({
      force: true
    });
    //move the button to basePage
    basePage.confirmButton().click();
    fuelExpensesPage.checkThatFuelExpensePageIsEmpty();
  })
  it("Check that is possible to fuel to a car", () => {
    garagePage.fuelExpensesSideMenuTab().click();
    generalStep.addAnExpense(
      basePage.getCurrentDate().currentDay,
      basePage.getCurrentDate().currentMonth,
      basePage.getCurrentDate().currentYear,
    );
    fuelExpensesStep.checkThatFuelExpenseIsAdded();
  })

  
})