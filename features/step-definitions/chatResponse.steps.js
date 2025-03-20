const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const ChatResponsePage = require('../../pages/ChatResponsePage');
const { getMagicLink } = require("../../gmailUtils");
const path = require('path');



console.log("✅ Step definitions file is loaded!"); // Debugging step

// let models = ["Deepseek V3", "GPT-4o mini", "GPT-4-Omni", "GPT-o1", "GPT-o1-Mini"];



When("I click and enter text in chat prompt",async() => {
    await ChatResponsePage.enterTextInChatPrompt();
    await browser.pause(10000);
});


Then("The chat response should contain relevant AI keywords for {string}", async function (modelName) {
    const expectedKeywords = ["artificial intelligence", "machines", "learning"];
    console.log(`🔍 Model name received: ${modelName}`); // Debugging

    if (!modelName) {
        throw new Error("❌ Model name is undefined! Check Scenario Outline mapping.");
    }

    await ChatResponsePage.verifyChatResponse(expectedKeywords, modelName);
});



When("I select {string} from the chat model list", async (modelName) => {
    await ChatResponsePage.selectChatModel(modelName);
});


When("I click on attach file button", async() => {
    await ChatResponsePage.clickAttachFileButton();
    await browser.pause(5000);
})



When("I upload a file", async () => {
    const filePath = path.join(__dirname, '../../filesdata/sample.log'); // Adjust the file extension
    const fileInput = await $('#file-input'); // Ensure this is the correct selector

    await browser.execute("document.getElementById('file-input').style.display='block'"); // Make input visible
    await fileInput.setValue(filePath); // Set file path directly
    await browser.pause(25000);

});

When("I click on send chat button", async() => {
    await ChatResponsePage.clickSendButton()
    await browser.pause(10000);
});

Then("I should see filename in Document chat response", async() => {
    await ChatResponsePage.documentChatResponse();
    await browser.pause(10000);
});

// genrate image text
When("I click on generate image button", async() => {
    await ChatResponsePage.clickGenerateImageButton();
    await browser.pause(10000);
});

Then("I should see image", async() => {
    await ChatResponsePage.displayTextImage();
    await browser.pause(5000);
})

When("I click and enter text in image chat prompt",async() => {
    await ChatResponsePage.enterTextInImageChatPrompt();
    await browser.pause(10000);
});
