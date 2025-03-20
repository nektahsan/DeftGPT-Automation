const BasePage = require('./BasePage');

class HistoryPage extends BasePage {

    //Chat History Locators

    async enterTextInChatHistorySearchbar() {
        const searchField = await $('//input[contains(@class, "SearchField_searchField") and @placeholder="Search"]');
        await searchField.click();
        await searchField.setValue("detailed explaination about appium configuration");
        await browser.pause(5000);
    }

    async searchresultText() {
        const resultItem = await $('//mark[contains(@class, "text-white") and contains(@class, "bg-primary") and text()="detailed explaination about appium configuration"]');
        await resultItem.click();
        await browser.pause(5000);

    }

    async historyChatVisible(){
        const searchResult = await $('//div[contains(@class, "answerContainer_messageContent__")]');
        await searchResult.waitForDisplayed({ timeout: 10000 }); // 10s wait
        await expect(searchResult).toBeDisplayed();
    }



}

module.exports = new HistoryPage();
