import {
  basePage
} from "../../pageObjects/BasePage";
import {
  user
} from "../../fixtures/user";
import {createAccount,validateCreatedAccount} from "../../handlers/userRegisterHandler";

//keep commented
/*const user = {
  name: name,
  lastName: lastName,
  email: email,
  userPassword: userPassword
};*/

describe("Test qaauto Sign In", () => {
  it("Visit site", () => {
    //issue
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    cy.url().should('eq', 'https://qauto2.forstudy.space/');
    basePage.signUpButton().should('have.text', 'Sign up');
    basePage.signUpButton().should("exist").click();
    basePage.appSignupModal().should('be.visible');
    createAccount(user);
    validateCreatedAccount(user);
  })
})