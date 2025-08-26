const BasePage = require('./BasePage');

class WorkSpacePage extends BasePage {
  async AssertGreeting() {
    const GreetingHeading = await $("//button[contains(text(), 'New Chat')]");
    await expect(GreetingHeading).toBeDisplayed();
  }
  async WorkSpaceBtn() {
    const WorkSpaceBtnLocator = await $(
      "//span[contains(text(), 'Workspaces')]"
    );
    await WorkSpaceBtnLocator.click();
  }

  async WorkSpaceText() {
    const WorkSpaceTextLocator = await $(
      "//span[@class='ChatNav_workSpaceName__rsnFi ChatNav_light__+zgwV' and @data-testid='sidebar-chat-newchat-workspace' and text()='Workspaces']"
    );
    await expect(WorkSpaceTextLocator).toBeDisplayed();
  }

  async createWorkspacebtn() {
    const createWorkspaceLocator = await $(
      "//div[@class='workspace_link__wWyWP workspace_light__tH5H5' and text()='Click to create new workspace']"
    );
    await createWorkspaceLocator.click();
  }

  async createWorkspaceNameText() {
    const workspaceInputField = await $(
      "//input[@data-testid='workspace-create-name' and @name='name']"
    );
    await workspaceInputField.click();
    await workspaceInputField.setValue("clickup workspace");
    await browser.pause(10000);
  }

  async clickOnContinueBtn() {
    const continueButtonLocator = await $('//button//span[text()="Continue"]');
    await continueButtonLocator.click();
  }

  async selectWorkspacedropdown() {
    const dropdown = await $(
      '//div[contains(@class, "react-select__control")]'
    );

    await dropdown.waitForClickable({ timeout: 5000 });
    await dropdown.click();
  }

  async selectWorkspacedropdowntext() {
    const knownOption = await $(
      "//div[contains(@class, 'flex') and contains(., 'Design') and contains(., 'Creative Work')]"
    );
    await knownOption.waitForDisplayed({ timeout: 5000 });
    await knownOption.click();
  }

  async enterURL() {
    const inputField = await $(
      '//input[@data-testid="workspace-create-name" and @name="name"]'
    );
    await inputField.waitForDisplayed({ timeout: 5000 });
    await inputField.waitForClickable({ timeout: 5000 });

    await inputField.click();
    await inputField.setValue("https://en.wikipedia.org/wiki/ESPNcricinfo");
  }

  async clickOnAddURLbtn() {
    const Addbtn = await $(
      "//div[contains(@class, 'flex flex-row') and .//input[@name='name']]//button"
    );
    await Addbtn.click();
  }
  async crossButton() {
    const crossbtnLocator = await $('//div[@class="cursor-pointer"]');
    await crossbtnLocator.click();
  }

  async selectWorkspacedropdowntexts() {
    const workspacetextLoc = await $(
      '//span[contains(@class, "truncate") and contains(@class, "flex-1") and contains(@class, "text-[")]'
    );
    await expect(workspacetextLoc).toBeDisplayed();
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

  async clickExistingWorkspace() {
    const existWorkspaceTextLocator = await $(
      "//div[text()='new workspace11']"
    );
    await existWorkspaceTextLocator.click();
  }

  async editThread() {
    const editthreadtext = await $(
      "//span[contains(@class, 'flex') and contains(@class, 'items-center') and contains(@class, 'cursor-pointer')]"
    );
    await editthreadtext.click();
    const inputField = await $(
      "//input[@type='text' and @value='new workspace11']"
    );
    await inputField.waitForDisplayed({ timeout: 2000 });
    await inputField.setValue(" Automation testing");

    const saveButton = await $("//div[@data-testid='confirm-edit-btn']");
    await saveButton.click();
  }

  async threadUpdateMessage() {
    const threadMessageLocator = await $(
      "//div[@type='info' and contains(@class, 'sc-fXSgeo') and contains(text(), 'Workspace updated successfully')]"
    );
    await expect(threadMessageLocator).toBeDisplayed();
  }
}


module.exports = new WorkSpacePage();


