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
    
    async SettingbtnLinkText() {
        const settingsLocator = await $('//div[contains(@class, "ChatSidebar_itemText") and text()="Settings"]');
        // await $(settingsLocator).waitForDisplayed({ timeout: 5000 }); // Ensure element is visible
        await settingsLocator.click(); // Click on the settings button
    }

    async LogoutBtn() {
        const logoutbtnLocator = await $('//div[contains(@class, "AccountNav_text") and text()="Logout"]');
        await $(logoutbtnLocator).click();
    }

    async LogInToYourAccountText() {
        const LogInToYourAccountText = await $('//div[contains(@class, "sc-fBdRDi VFfbK") and text()="Log in  to your account"]');
        await expect(LogInToYourAccountText).toBeDisplayed();
    }

    async unregisteredUserMessage() {
        const UnregistereduserMessageLocator = await $("//div[@class='sc-fXSgeo kVPSHy' and text()='User not found']");
        await expect(UnregistereduserMessageLocator).toBeDisplayed();
    }

    async validEmailAddressMessage() {
        const validEmailAddressMessageLocator = await $("//span[text()='Please enter a valid email']");
        await expect(validEmailAddressMessageLocator).toBeDisplayed();
    }





}

module.exports = new LoginPage();
