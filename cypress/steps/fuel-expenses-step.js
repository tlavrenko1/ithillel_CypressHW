import {
    garagePage
} from "../pages/GaragePage";
import GeneralStep from "../steps/general-step";
import {
    fuelExpensesPage
} from "../pages/FuelExpensesPage";
import {
    request
} from "../steps/requests";


export default class FuelExpensesStep extends GeneralStep {

    addExpenseOnFuelPage(date) {
        fuelExpensesPage.addFuelExpenseButton().click();
        this.addExpense(date);
    }

    checkThatFuelExpenseIsAdded() {
        fuelExpensesPage.fuelExpensesTable().should(`be.visible`);
    }

    getGarageSideMenuTab() {
        return fuelExpensesPage.garageSideMenuTab();
    }

    getFuelSideMenuTab() {
        return garagePage.fuelExpensesSideMenuTab().click();
    }

    checkThatFuelExpensePageIsEmpty() {
        return fuelExpensesPage.emptyFuelExpensePageLabel().should('be.visible');
    }


    addExpenseToCarViaAPI(carId, date, mileage, liters, totalCost) {
        return cy.addExpenseToCarViaAPI(carId, date, mileage, liters, totalCost).then(response => {
            fuelExpensesStep.checkThatFuelExpenseIsAddedViaAPI(response, carId, date, mileage + 1, liters, totalCost);
            return Cypress.Promise.resolve(response.body.data);
        });
    }
    checkThatFuelExpenseIsAddedViaAPI(response, createdCarID, date, mileage, liters, totalCost) {
        return cy.checkThatFuelExpenseIsAddedViaAPI(response, createdCarID, date, mileage, liters, totalCost);
    }

    selectCarFromDropdown(car) {
        return fuelExpensesPage.fuelExpensesDropDown(car);
    }

    getRecentlyAddedExpenseFromTable(recentlyAddedFuelObj) {
        return fuelExpensesPage.findProperRecordInFuelExpensesTable(1).each(el => {
            const text = el.text();
            fuelExpensesStep.compareFuelResponseAPIAndUI(text, recentlyAddedFuelObj);
        });
    }

    compareFuelResponseAPIAndUI(text, apiResponse) {
        expect(text).to.contain(`${apiResponse.mileage}${apiResponse.liters}L${apiResponse.totalCost} USD`);

    }
    //should stay commented
    // convertApiDateToUIDateFormat(apiDate) {
    //     const apiData = apiResponse.body.data;
    //     const reportedAt = apiData.reportedAt.slice(0, 14);
    //     const apiDate = new Date(reportedAt);
    //     const date = new Date(apiDate);

    //     // Get the day, month, and year components from the Date object
    //     const day = date.getDate().toString().padStart(2, "0"); // Day with leading zero
    //     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month with leading zero
    //     const year = date.getFullYear().toString(); // Full year
    //     // Format the date as "DD.MM.YYYY"
    //     const formattedDate = `${day}.${month}.${year}`;
    // }

}
export const fuelExpensesStep = new FuelExpensesStep();