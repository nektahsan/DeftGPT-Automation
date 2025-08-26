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
    await loginbutton.click(); 
  }

  async AssertEmailSent() {
    const EmailSentHeading = await $("//div[text()='Email Sent']");
    await expect(EmailSentHeading).toBeDisplayed();
  }

  async AssertGreeting() {
    const GreetingHeading = await $("//button[contains(text(), 'New Chat')]");
    await expect(GreetingHeading).toBeDisplayed();
  }

  async clickProfileHeading() {
    const profileHeading = await $(
      "//span[contains(@class, 'ChatSidebar_detail_Head__')]"
    );
    await profileHeading.waitForDisplayed({ timeout: 5000 });
    await profileHeading.click();
  }

  async clickSignOutButton() {
    const signOutButton = await $(
      "//div[contains(@class, 'SidebarSubOption_signOutText__')]"
    );
    await signOutButton.waitForDisplayed({ timeout: 5000 });
    await signOutButton.click();
  }

  async verifyRedirectedToIndexPage() {
    const indexPageIndicator = await $(
      "//button[@data-testid='landing-signup' and text()='Try DeftGPT for free']"
    );
    await indexPageIndicator.waitForDisplayed({ timeout: 5000 });
    await expect(indexPageIndicator).toBeDisplayed();
  }


//   async verifyLoginButtonVisible() {
//     const loginButton = await $(
//       "//span[@data-testid='landing-nav-login' and text()='Log in']"
//     );
//     await loginButton.waitForDisplayed({ timeout: 5000 });
//     await expect(loginButton).toBeDisplayed();
//   }

  async unregisteredUserMessage() {
    const UnregistereduserMessageLocator = await $(
      "//div[@class='sc-fXSgeo kVPSHy' and text()='User not found']"
    );
    await expect(UnregistereduserMessageLocator).toBeDisplayed();
  }

  async validEmailAddressMessage() {
    const validEmailAddressMessageLocator = await $(
      "//span[text()='Please enter a valid email']"
    );
    await expect(validEmailAddressMessageLocator).toBeDisplayed();
  }
}

module.exports = new LoginPage();
