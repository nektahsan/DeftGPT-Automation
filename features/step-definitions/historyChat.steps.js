const { Given, When, Then } = require('@wdio/cucumber-framework');
const HistoryPage = require('../../pages/HistoryPage');


When("I click and enter text in the search field", async () => {
    await HistoryPage.enterTextInChatHistorySearchbar();
    await browser.pause(5000);
});

When("I click on the Search result text", async() => {
    await HistoryPage.searchresultText();
    await browser.pause(5000);
});


Then("I should see search history text in chat", async () => {
    await HistoryPage.historyChatVisible();
    await browser.pause(5000);
});