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
    generalStep.openMainPage();
    generalStep.signUpAsUser(user);
    generalStep.logout();
  })

  beforeEach(() => {

    generalStep.openMainPage();
    generalStep.login(user.email, user.password);
    generalStep.checkThatURLContains('panel/garage');
    generalStep.verifyThatLogOutButtonIsVisible();
  })

  after(() => {
    garageStep.deleteCarFromGarage();
  })
  it("Check that is possible to add new car to user garage", () => {
    garageStep.addNewCar(firstCar);
    garageStep.checkThatCarIsAdded(firstCar);
    garageStep.addAnExpenseOnGaragePage(basePage.getCurrentDate());
  })

  it("Check that is possible to delete a car to user garage", () => {
    garageStep.addNewCar(secondCar);
    garageStep.checkThatCarIsAdded(secondCar);
    garageStep.deleteCarFromGarage();
    garageStep.checkThatCarIsDeleted(secondCar);
  })
})