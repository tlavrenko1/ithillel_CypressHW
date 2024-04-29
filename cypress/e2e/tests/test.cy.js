import {
  basePage
} from "../../pages/BasePage";
import {
  user
} from "../../fixtures/user";
import {
  createAccount,
  validateCreatedAccount
} from "../../handlers/userRegisterHandler";
import {
  generalStep
} from "../../steps/general-step";

//keep commented
/*const user = {
  name: name,
  lastName: lastName,
  email: email,
  userPassword: userPassword
};*/

describe("Test Suite", () => {

  before(() => {
    cy.visit('/');
    basePage.signUpButton().should('have.text', 'Sign up');
    basePage.signUpButton().should("exist").click();
    basePage.appSignupModal().should('be.visible');
    createAccount(user);
    validateCreatedAccount(user);
    cy.contains('Log out').should('exist').click();
  })

  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', '/panel/garage');
    generalStep.login(user.email, userPassword);
    generalStep.verifyThatLoginButtonIsVisible();
  })

  afterEach(() => {

  })

  after(() => {

  })
  it("Test Sign in Garage Service", () => {
  
  })
})