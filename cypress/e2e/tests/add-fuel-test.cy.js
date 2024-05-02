import {
  basePage
} from "../../pages/BasePage";
import {
  user
} from "../../fixtures/user";
import {
  generalStep
} from "../../steps/general-step";
import {
  garageStep
} from "../../steps/garage-step";
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
    generalStep.openMainPage();
    generalStep.signUpAsUser(user);
    fuelExpensesStep.getGarageSideMenuTab().click();
    garageStep.addNewCar(firstCar);
    garageStep.checkThatCarIsAdded(firstCar);
    generalStep.logout();
  })

  beforeEach(() => {
    generalStep.openMainPage();
    generalStep.login(user.email, user.password);
    generalStep.checkThatURLContains('panel/garage');
    generalStep.verifyThatLogOutButtonIsVisible();
  })

  after(() => {
    fuelExpensesStep.getGarageSideMenuTab().click();
    garageStep.deleteCarFromGarage();
  })

  it("Check that is possible to delete fuel to the car", () => {
    fuelExpensesStep.getFuelSideMenuTab().click();
    fuelExpensesStep.addExpenseOnFuelPage(basePage.getCurrentDate());
    fuelExpensesStep.checkThatFuelExpenseIsAdded();
    fuelExpensesStep.getFuelSideMenuTab().click();
    fuelExpensesPage.removeFuelRecord().click({
      force: true
    });
    generalStep.confirmTheAction();
    fuelExpensesStep.checkThatFuelExpensePageIsEmpty();
  })
  it("Check that is possible to fuel to a car", () => {
    fuelExpensesStep.getFuelSideMenuTab().click();
    fuelExpensesStep.addExpenseOnFuelPage(basePage.getCurrentDate());
    fuelExpensesStep.checkThatFuelExpenseIsAdded();
  })
})