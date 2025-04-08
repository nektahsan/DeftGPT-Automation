const BasePage = require('./BasePage');

class WorkSpacePage extends BasePage {

    async WorkSpaceBtn() {
        const WorkSpaceBtnLocator = await $("//div[@class='ChatSidebar_historyHeading__Laoue' and text()='Workspaces']");
        await $(WorkSpaceBtnLocator).click();
    }

    async WorkSpaceText() {
        const WorkSpaceTextLocator = await $("//span[@class='ChatNav_workSpaceName__rsnFi ChatNav_light__+zgwV' and @data-testid='sidebar-chat-newchat-workspace' and text()='Workspaces']");
        await expect(WorkSpaceTextLocator).toBeDisplayed();
    }

    async createWorkspacebtn() {
        
        const createWorkspaceLocator = await $("//div[@class='workspace_link__wWyWP workspace_light__tH5H5' and text()='Click to create new workspace']");
        await createWorkspaceLocator.click();
    }


    async createWorkspaceNameText() {
        const workspaceInputField = await $("//input[@data-testid='workspace-create-name' and @name='name']");
        await workspaceInputField.click();
        await workspaceInputField.setValue("ahsanAutomation");
        await browser.pause(10000);
    }

    async clickOnContinueBtn() {
        const continueButtonLocator = await $('//button//span[text()="Continue"]');
        await continueButtonLocator.click();

    }

    async selectWorkspacedropdown() {
        // Click to open the dropdown
        const dropdownIndicator = await $('//div[contains(@class, "react-select__control")]');
        await dropdownIndicator.click();
        
        // Wait for the options container to be visible
        const optionsContainer = await $('//div[contains(@class, "react-select__menu")]');
        await optionsContainer.waitForDisplayed({ timeout: 10000 });
        
        // Wait for all options to load
        const allOptions = await $$('//div[contains(@class, "react-select__option")]');
        await browser.waitUntil(
            async () => (await allOptions.length) > 0,
            { timeout: 10000, timeoutMsg: 'Options did not load in time' }
        );
    
        // Select the first option using index
        const firstOption = await allOptions[0];  // Index 0 for the first option
        await firstOption.click();
    }
    

    async enterURL() {
        // Locate the input field and click on it
        const inputField = await $('//input[@data-testid="workspace-create-name" and @name="name"]');
        await inputField.click();

        // Enter text in the input field
        await inputField.setValue('https://en.wikipedia.org/wiki/ESPNcricinfo');

    }

    async clickOnAddURLbtn(){
        const Addbtn = await $('//div[contains(@class, "sc-eulNck") and contains(@class, "gmFfgh")]//span[contains(@class, "RichContext_btn__52Dxi")]');
        await Addbtn.click();

    }

    //Cross button click
    async crossButton(){
        const crossbtnLocator = await $('//div[@class="cursor-pointer"]');
        await crossbtnLocator.click();

    }


    async WorkSpaceNameTextt(){
        const workspacetextLoc = await $('//div[contains(@class, "workspace_statement__VDkSS") and contains(@class, "workspace_light__tH5H5") and text()="new workspace"]');
        await expect(workspacetextLoc).toBeDisplayed();
    }

    //For Thread chat

    async clickExistingWorkspace(){
        const existWorkspaceTextLocator = await $("//div[text()='new workspace11']");
        await existWorkspaceTextLocator.click();

    }

    async editThread(){
        const editthreadtext = await $("//span[contains(@class, 'flex') and contains(@class, 'items-center') and contains(@class, 'cursor-pointer')]");
        await editthreadtext.click();

        // Wait for the input field to appear after clicking
        const inputField = await $("//input[@type='text' and @value='new workspace11']"); 
        await inputField.waitForDisplayed({ timeout: 2000 });

        // Enter text into the input field
        await inputField.setValue(" Automation testing");

        const saveButton = await $("//div[@data-testid='confirm-edit-btn']");
        await saveButton.click();
    }

    async threadUpdateMessage() {
        const threadMessageLocator = await $("//div[@type='info' and contains(@class, 'sc-fXSgeo') and contains(text(), 'Workspace updated successfully')]");
        await expect(threadMessageLocator).toBeDisplayed();

    }



}

module.exports = new WorkSpacePage();
