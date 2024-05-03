import {
    basePage
} from "../pages/BasePage";
import {
    fuelExpensesPage
} from "../pages/FuelExpensesPage";
import {
    garagePage
} from "../pages/GaragePage";
import GeneralStep, {
    generalStep
} from "../steps/general-step";
import {
    findCarInCarsList
}
from "../handlers/carCRUDHandler";
import {
    utils
} from "./api-utils";
import {
    Requests
} from "./requests";

const request = new Requests();

export default class GarageStep extends GeneralStep {
    
    addNewCar(car) {
        garagePage.pageHeading().find(fuelExpensesPage.generalAddButton())
            .should('be.visible').click();
        garagePage.addCarBrandDropDown().select(car.brand);
        garagePage.addCarModelDropDown().select(car.model);
        garagePage.addCarMileageInput().type(car.mileage);
        garagePage.addCarButtonInsideModal().click(); 
    }

    checkThatCarInCarListViaAPI(carId, carObj) {
        request.getCarList().then((response) => {
            utils.validateStatusCode(response, 200);
            utils.validateCreatedCar(response, carObj);
            let actual = findCarInCarsList(response.body.data, carId);
            expect(actual?.id).to.eq(carId);
        }); 
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

    addAnExpenseOnGaragePage(date) {
        garagePage.addFuelExpenseButton(1).click();
        generalStep.addExpense(date);
    }
}

export const garageStep = new GarageStep();