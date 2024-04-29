import {
    garagePage
} from "../pages/GaragePage";
import GeneralStep from "../steps/general-step";
import {
    fuelExpensesPage
} from "../pages/FuelExpensesPage";

export default class FuelExpensesStep extends GeneralStep {
    checkThatFuelExpenseIsAdded() {
        fuelExpensesPage.fuelExpensesTable().should(`be.visible`);
    }

    checkThatFuelExpenseIsDeleted() {
        

    }
}
export const fuelExpensesStep = new FuelExpensesStep();