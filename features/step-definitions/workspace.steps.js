const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const WorkSpacePage = require('../../pages/WorkSpacePage');
const { getMagicLink } = require("../../gmailUtils");
const path = require('path');



When("I click on Workspace Button", async() => {
    await WorkSpacePage.WorkSpaceBtn();
    await browser.pause(2000);
});

Then("I should see Workspace text", async() => {
    await WorkSpacePage.WorkSpaceText();
    await browser.pause(2000);

});

When("I click on create a workspace button", async() => {
    await WorkSpacePage.createWorkspacebtn();
    await browser.pause(2000);
});

When("I click and enter text in workspace field", async() => {
    await WorkSpacePage.createWorkspaceNameText();
});

When("I click on continue button", async() => {
    await WorkSpacePage.clickOnContinueBtn();
    await browser.pause(10000);
})

When("I click and select text for workspace", async() => {
    await WorkSpacePage.selectWorkspacedropdown();
    await browser.pause(2000);
});

When("I click and enter text in URL field", async() => {
    await WorkSpacePage.enterURL();
});

When("I click on add URl button", async() => {
    await WorkSpacePage.clickOnAddURLbtn();
    await browser.pause(10000);
});


Then("I should see Workspace name text", async() => {
    await WorkSpacePage.WorkSpaceNameTextt();
    await browser.pause(7000);
});


When("I click on cross button", async() => {
    await WorkSpacePage.crossButton();
    await browser.pause(3000);
});

//Edit thread
When("I click on existing workspace", async() =>{
    await WorkSpacePage.clickExistingWorkspace();
    await browser.pause(5000);
});

When("I click on edit thread button", async() =>{
    await WorkSpacePage.editThread();
    await browser.pause(5000);

});

Then("I should see update thread message", async() =>{
    await WorkSpacePage.threadUpdateMessage();

});









