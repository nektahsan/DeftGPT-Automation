const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    async assertLoginHeadingDisplayed() {
        const loginHeading = await $("//div[starts-with(text(), 'Log in')]");
        await expect(loginHeading).toBeDisplayed();
    }

    async enterEmail(email) {
        const emailInput = await $("//input[@data-testid='email-login']");
        await emailInput.setValue(email);
    }

    async Loginbtn() {
        const loginbutton = await $("//button[@data-testid='login-btn']");
        await expect(loginbutton).toBeDisplayed();
        await loginbutton.click();  // ✅ Fix: Ensure correct variable name
    }
    
    async AssertEmailSent() {
        const EmailSentHeading = await $("//div[text()='Email Sent']");
        await expect(EmailSentHeading).toBeDisplayed();
    }

    async AssertGreeting() {
        const GreatingHeading = await $("//h1[normalize-space()='Hello, Automation!']");
        await expect(GreatingHeading).toBeDisplayed();
    }
    

}

module.exports = new LoginPage();
