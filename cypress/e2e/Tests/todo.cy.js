import BasePage from "../../pageObjects/basePage";
import {
  user
} from "../../fixtures/user";

const basePage = new BasePage;

describe("Test qaauto Sign In", () => {
  it("Visit site", () => {
    cy.visit("https://guest:welcome2qauto@qauto2.forstudy.space/");
    cy.url().should('eq', 'https://qauto2.forstudy.space/');
    cy.get("button.hero-descriptor_btn").should('have.text', 'Sign up');
    cy.get("button.hero-descriptor_btn").should("exist").click();
    cy.get('app-signup-modal').should('be.visible');
    cy.get("input#signupName").type(user.name)
      .should('have.value', user.name)
      .should('have.focus');
    cy.get("input#signupLastName").type(user.lastName)
      .should('have.value', user.lastName)
      .should('have.focus');
    cy.get("input#signupEmail").type(basePage.generateUniqueEmail());
    cy.get('input#signupPassword').should('be.visible');
    cy.get("input#signupPassword").type(user.password);
    cy.get("input#signupRepeatPassword").type(user.password)
      .should('have.value', user.password);
    cy.get("button").contains("Register").click();
    cy.url().should('include','/panel/garage')
    cy.get("#userNavDropdown").should('be.visible')
      .should('have.text', ' My profile ')
      .click();
    cy.get('[aria-labelledby="userNavDropdown"]').should('be.visible');
    cy.get('.dropdown-menu').should('contain', 'Garage');
    cy.get('.user-nav_menu-group > a').contains('Profile')
      .click();
    cy.get('.profile_name').should('have.text', `${user.name} ${user.lastName}`);
  });
});