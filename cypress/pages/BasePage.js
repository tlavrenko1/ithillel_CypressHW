export default class BasePage {

    modalContent() {
        return cy.get('.modal-content');
    }

    pageHeading() {
        return cy.get(`.panel-page_heading`);
    }

    validateCurrentUrl(url) {
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

    garageMainMenuTab() {
        return cy.get(`//a[@class='btn header-link -active' and contains(text(),'Garage')]`);
    }

    fuelExpensesMainMenuTab() {
        return cy.get(`//a[@class='btn header-link' and contains(text(),'Fuel expenses')]`);
    }

    instructionsMainMenuTab() {
        return cy.get(`//a[@class='btn header-link' and contains(text(),'Instructions')]`);
    }

    myProfileMainMenuDropdown() {
        return cy.get(`#userNavDropdown`);
    }

    garageSideMenuTab() {
        return cy.get(`.btn.btn-white.btn-sidebar.sidebar_btn[routerlink='garage']`);
    }

    fuelExpensesSideMenuTab() {
        return cy.get(`.btn.btn-white.btn-sidebar.sidebar_btn[routerlink='expenses']`);
    }

    instructionsSideMenuTab() {
        return cy.get(`.btn.btn-white.btn-sidebar.sidebar_btn[routerlink='instructions']`);
    }

    profileSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn -profile' and normalize-space()='Profile']`);
    }

    settingsSideMenuTab() {
        return cy.get(`//a[@class='btn btn-white btn-sidebar sidebar_btn' and normalize-space()='Settings']`);
    }

    logOutSideMenuTab() {
        return cy.get(`//a[@class='btn btn-link text-danger btn-sidebar sidebar_btn' and normalize-space()='Log out']`);
    }

    garageMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link disabled' and normalize-space()='Garage']`);
    }

    fuelExpensesMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Fuel expenses']`);
    }

    instructionsMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Instructions']`);
    }

    profileMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Profile']`);
    }

    settingsMainMenuDropDown() {
        return cy.get(`//a[@class='dropdown-item btn btn-link user-nav_link'][normalize-space()='Settings']`);
    }

    logOutMainMenuDropDown() {
        return cy.get(`//button[@class='dropdown-item btn btn-link user-nav_link']`);
    }

    userMyProfileMainDropDown() {
        return cy.get(`[aria-labelledby="userNavDropdown"]`);
    }

    userMyProfileMainDropDownOptions(option) {
        return cy.get(`.user-nav_menu-group > a`).contains(`${option}`);
    }

    profileNameLabel() {
        return cy.get(`.profile_name`);
    }

    findButtonByText(text) {
        return cy.get('button').contains(text);
    }

    signInEmai() {
        return cy.get('#signinEmail');
    }

    signInPassword() {
        return cy.get('#signinPassword');
    }

    confirmButton() {
        return this.modalContent().find(`.btn-danger`);
    }

    //move to cypress commands
    generateUniqueEmail() {
        // Generate random 3-letter prefix
        const prefix = Math.random().toString(36).slice(2, 5);

        // Generate random 5-digit number
        const number = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

        return `testuser${prefix}${number}@test.com`;
    }

    getCurrentDate() {
        const date = new Date();

        let day = date.getDate();
        let month = date.toLocaleString('default', {
            month: 'short'
        });
        let year = date.getFullYear().toString();
        const currentDate = {
            currentDay: day,
            currentMonth: month,
            currentYear: year,
        }

        return currentDate;
    }

    getRandomCar(carData) {
        const randomNumber = Math.floor(Math.random() * 1001);
        const randomBrand = carData.featured[randomNumber % carData.featured.length];

        const randomNumberModel = Math.floor(Math.random() * 1001);
        const randomModel = randomBrand.model[randomNumberModel % randomBrand.model.length];

        return {
            brand: randomBrand.brand,
            model: randomModel
        };
    }
}

export const basePage = new BasePage;