import {
    garagePage
} from "../pages/GaragePage";
import GeneralStep from "../steps/general-step";
import {
    fuelExpensesPage
} from "../pages/FuelExpensesPage";

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
        return garagePage.fuelExpensesSideMenuTab()
    }

    checkThatFuelExpensePageIsEmpty() {
        return fuelExpensesPage.emptyFuelExpensePageLabel().should('be.visible');
    }
}
export const fuelExpensesStep = new FuelExpensesStep();