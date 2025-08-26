const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const BlogPage = require("../../pages/BlogPage");
const { getMagicLink } = require("../../gmailUtils");
const path = require('path');

Then("I should see the New Chat block", async () => {
  await LoginPage.AssertGreeting();
  await browser.pause(2000);
});


When("I click on Blogger AI button", async () => {
  await BlogPage.Blogbtn();
  await browser.pause(10000);
});

Then("I should see Blogger AI text", async () => {
  await BlogPage.verifyBlogAIVisible();
  await browser.pause(5000);
});

When(
  /^I enter "(.*)" in the text box under "What do you want to write about\?"$/,
  async (topicText) => {
    await BlogPage.BlogTopicField(topicText);
    await browser.pause(5000);
  }
);

When("I click on the How-to Guide card", async () => {
  await BlogPage.selectHowToGuideContent();
  await browser.pause(3000);
});


When("I select {string} as the blog length", async function (length) {
  await BlogPage.selectLengthOption(length);
  await browser.pause(3000);
});

When("I click on the {string} button", async (buttonText) => {
  const button = await $(`//button[normalize-space()='${buttonText}']`);
  await button.waitForDisplayed({ timeout: 5000 });
  await button.click();
});

Then("I should see writing tone selection", async function () {
  const writingToneLocator = await $(
    "//h2[normalize-space(text())='Writing Tone']");
  await expect(writingToneLocator).toBeDisplayed();
  await browser.pause(5000);
});

When("I click on the Professional card as the writing tone", async function () {
  await BlogPage.writingToneSelection("Professional");
  await browser.pause(5000);
});

When("I select {string} as the language", async function (language) {
  await BlogPage.selectLanguage(language);
  await browser.pause(3000);
});

When("I enter the following target keywords:", async function (dataTable) {
  const keywords = dataTable.raw().flat(); 
  await BlogPage.enterTargetKeywords(keywords);
  await browser.pause(2000);
});

Then("I should see options to attach a document and a URL link", async () => {
  await BlogPage.verifyAttachDocumentAndURLVisible();
  await browser.pause(2000);
});

When("I enter the URL {string}", async (url) => {
  await BlogPage.enterResearchURL(url);
  await browser.pause(2000);
});

When("I check the option to {string}", async (optionLabel) => {
  await BlogPage.checkOptionByLabel(optionLabel);
  await browser.pause(2000);
});

When("I click on the Generate Article button", async () => {
  await BlogPage.clickGenerateArticle();
  await browser.pause(2000);
});

Then("I should see Crafting Your Article", async () => {
  await BlogPage.verifyTextVisible("Crafting Your Article");
  await browser.pause(2000);
});

Then("I should see Writing your blog...", async () => {
  await BlogPage.verifyTextVisible("Writing your blog...");
  await browser.pause(2000);
});

Then("I should see Your Article is Ready!", async () => {
  await BlogPage.verifyTextVisible("Your Article is Ready!");
  await browser.pause(2000);
});