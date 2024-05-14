import {
    user
} from "../../fixtures/user";
import {
    generalStep
} from "../../steps/general-step";
import {
    validateCreatedAccount
} from "../../handlers/userRegisterHandler";
import {
    garageStep
} from "../../steps/garage-step";
import {
    carData
} from "../../fixtures/carData";
import {
    basePage
} from "../../pages/BasePage";
import {
    fuelExpensesStep
} from "../../steps/fuel-expenses-step";
import {interceptedRequest} from "../../fixtures/interceptedRequest";


const date = new Date();
let createdCarID;
let recentlyAddedFuelObj;
let createdCarResponse;

describe("Testing of basic scenario via API ", () => {
    const email = basePage.generateUniqueEmail();
    const pass = basePage.generatePass();

    const randomCar = basePage.getRandomCar(carData);
    let randomCarObj = {
        brand: randomCar.brand,
        model: randomCar.model,
        mileage: 100
    }

    before('Register new user via API', () => {
        generalStep.signUpViaApi(user, email, pass);
    })

    beforeEach(() => {
        generalStep.cleanCookies();
    })

    after(() => {
        cy.log(interceptedRequest);
    })

    it('Login as registered user via API', () => {

        generalStep.logInViaApi(email, pass);
        generalStep.logOutViaApi();
    })

    it('Add a car to garage', () => {
        generalStep.logInViaApi(email, pass);
        generalStep.openMainPage();
        generalStep.saveInterceptedRequestToFile('POST', '/api/cars', () => {
            garageStep.addNewCar(randomCarObj);
        })
        .then(data => {
            createdCarID = data.id;
        });
        garageStep.checkThatCarInCarListViaAPI(createdCarID, randomCarObj);
    });
    

    it('Add expense for the car via API', () => {
        generalStep.logInViaApi(email, pass);
        fuelExpensesStep.addExpenseToCarViaAPI(createdCarID, date.toISOString(), randomCarObj.mileage + 1, 1, 100)
        .then(response => {
            recentlyAddedFuelObj = response;
        });
    })

    it('Validate on UI that fuel expense was added via API', () => {
        generalStep.logInViaApi(email, pass);
        generalStep.openMainPage();
        fuelExpensesStep.getFuelSideMenuTab();
        fuelExpensesStep.selectCarFromDropdown(randomCarObj);
        fuelExpensesStep.getRecentlyAddedExpenseFromTable(recentlyAddedFuelObj);
    })

})