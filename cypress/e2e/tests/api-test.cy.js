import {
    basePage
} from "../../pages/basePage";
import {
    Requests
} from "../../steps/requests";
import {
    user
} from "../../fixtures/user";
import {
    utils
} from "../../steps/api-utils";
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

const request = new Requests();

describe("Test Suite", () => {
    const email = basePage.generateUniqueEmail();
    const pass = basePage.generatePass();

    const randomCar = basePage.getRandomCar(carData);
    let randomCarObj = {
        brand: randomCar.brand,
        model: randomCar.model,
        mileage: 100
    }

    before('Register new user via API', () => {
        request.registerNewUserApi(user, email, pass).then((response) => {
            utils.validateStatusCodeCreated(response);
        });

    })

    beforeEach(() => {
        cy.clearCookies();
    })
    it('Login as registered user', () => {
        cy.visit('/'); 
        generalStep.login(email, pass);
        validateCreatedAccount(user);
        basePage.garageSideMenuTab().click();
        garageStep.addNewCar(randomCarObj);
        request.getCarList().then((response) => {
            utils.validateStatusCodeReceivedData(response);
            utils.validateCreatedCar(response, randomCarObj);
        })
    })

})