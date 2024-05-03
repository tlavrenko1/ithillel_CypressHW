//Cypress.Commands.add('login', (email, password) => {
//})=

import { request } from "../steps/requests";
import { utils } from "../steps/api-utils";

Cypress.Commands.add('addExpenseToCarViaAPI', (carId,date,mileage,liters,totalCost) => {
    request.addExpenseToCar(carId, date, mileage + 1, liters, totalCost).then((response) => {
        utils.validateStatusCode(response, 200);
    });
})

Cypress.Commands.add('checkThatFuelExpenseIsAddedViaAPI',(response, createdCarID,date,mileage,liters,totalCost) => {
    const responseData = response.body.data;
        expect(responseData.carId).to.eq(createdCarID);
        expect(responseData.reportedAt).to.equal(date);
        expect(responseData.mileage).to.eq(mileage);
        expect(responseData.liters).to.eq(liters);
        expect(responseData.totalCost).to.eq(totalCost);
    });