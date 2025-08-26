const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const { getMagicLink } = require("../../gmailUtils");
const path = require('path');
const WorkSpacePage = require('../../pages/WorkSpacePage');



console.log("Step definitions file is loaded!"); 

Given("I am on the login page", async () => {
    const baseUrl = browser.options.baseUrl;
    await browser.url(`${baseUrl}`);
    await browser.pause(3000);
    await LoginPage.assertLoginHeadingDisplayed();
});


When("I enter {string} in email field", async (email) => {
    await LoginPage.enterEmail(email);
    await browser.pause(1000);

});

When("I click on Login button", async () => {
    await LoginPage.Loginbtn();
    await browser.pause(10000);
});

Then("I should see Email Sent page", async () => {
    await LoginPage.AssertEmailSent();
});

When("I click on the magic link in email", async function () {
    console.log("Checking Gmail for magic link...");
    
    const magicLink = await getMagicLink();

    if (!magicLink) {
        throw new Error("No magic link found in email!");
    }

    console.log(`Magic link received: ${magicLink}`);  
    await browser.url(magicLink);
    await browser.pause(20000); 
});

Then("I should see the 'New Chat' block", async () => {
  await LoginPage.AssertGreeting();
  await browser.pause(2000);
});

When("I click on the Profile Heading", async () => {
  await LoginPage.clickProfileHeading();
});
  
When("I click on the Sign out button", async () => {
  await LoginPage.clickSignOutButton();
});

Then(
  'I should see the "Try DeftGPT for free" button on the landing page',
  async () => {
    const indexPageIndicator = await $(
      "//button[@data-testid='landing-signup' and text()='Try DeftGPT for free']"
    );
    await indexPageIndicator.waitForDisplayed({ timeout: 5000 });
    await expect(indexPageIndicator).toBeDisplayed();
  }
);


Then("I should see user not found message", async() => {
    await LoginPage.unregisteredUserMessage();

});

Then("I should see please enter valid email address message", async() => {
    await LoginPage.unregisteredUserMessage();

});



