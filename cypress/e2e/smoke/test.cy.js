import {
  user
} from "../../fixtures/user";
import {
  generalStep
} from "../../steps/general-step";

describe("Test Suite", () => {

  before(() => {
    generalStep.openMainPage();
    generalStep.signUpAsUser(user);
    generalStep.logout();
  })

  it("Test Sign in Garage Service", () => {
    generalStep.openMainPage();
    generalStep.login(user.email, user.password);
    generalStep.checkThatURLContains('panel/garage');
    generalStep.verifyThatLogOutButtonIsVisible();
  })
})