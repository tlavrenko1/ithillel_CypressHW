import {
    basePage
} from "../pages/BasePage";
import {
     fuelExpensesPage
} from "../pages/FuelExpensesPage";
import {
    garagePage
} from "../pages/GaragePage";
import GeneralStep from "../steps/general-step";

export default class GarageStep extends GeneralStep {
    addNewCar(car) {
        garagePage.pageHeading().find(fuelExpensesPage.generalAddButton())
            .should('be.visible').click();
        garagePage.addCarBrandDropDown().select(car.brand);
        garagePage.addCarModelDropDown().select(car.model);
        garagePage.addCarMileageInput().type(car.mileage);
        garagePage.addCarButtonInsideModal().click();
    }

    checkThatCarIsAdded(car) {
        garagePage.findElementByValue(`${car.brand} ${car.model}`);
    }

    deleteCarFromGarage() {
        garagePage.editLastAddedCarInfoButton().click();
        garagePage.removeCarButton().click();
        basePage.confirmButton().click();
    }

    checkThatCarIsDeleted(car) {
        garagePage.findElementByValue(`${car.brand} ${car.model}`).should('not.exist');
    }
}

export const garageStep = new GarageStep();