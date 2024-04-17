export default class BasePage {

    validateCurrentUrl(url){
        return cy.url().should('include', `${url}`);
    }

    signUpButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    signupName() {
        return cy.get("input#signupName");
    }

    signupLastName() {
        return cy.get("input#signupLastName");
    }

    signupEmail() {
        return cy.get("input#signupEmail");
    }

    signupPassword() {
        return cy.get('input#signupPassword');
    }

    signupRepeatPassword() {
        return cy.get("input#signupRepeatPassword");
    }

    registerButton() {
        return cy.get("button").contains("Register");
    }

    appSignupModal() {
        return cy.get('app-signup-modal').should('be.visible');
    }



    


//move to cypress commands
    generateUniqueEmail() {
        // Generate random 3-letter prefix
        const prefix = Math.random().toString(36).slice(2, 5);

        // Generate random 5-digit number
        const number = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

        return `testuser${prefix}${number}@test.com`;
    }
}

export const basePage = new BasePage;