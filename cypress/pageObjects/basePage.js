export default class BasePage {
    generateUniqueEmail() {
        // Generate random 3-letter prefix
        const prefix = Math.random().toString(36).slice(2, 5);

        // Generate random 5-digit number
        const number = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

        return `testuser${prefix}${number}@test.com`;
    }
}