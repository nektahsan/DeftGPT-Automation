const BasePage = require('./BasePage');

class ChatResponsePage extends BasePage {

    
    async selectChatModel(modelName) {
        await $('//div[contains(@class, "ChatNav_model__UUoPS")]').click(); // Locator for Modal Open
        const modelLocator = await $(`//div[contains(@class, "ModalItem_modalName__ry-r1") and contains(text(),"${modelName}")]`); //Locator for select model

        await modelLocator.waitForDisplayed({ timeout: 5000 });
        await modelLocator.click(); // Select Model
    }
    

    async enterTextInChatPrompt() {
        const chatField = await $('//textarea[contains(@class, "SearchField_textarea__") and @placeholder="Send a message"]');
        await chatField.click();
        await chatField.setValue("what is Ai");
        await browser.keys("Enter");
        await browser.pause(15000);

    }

    async verifyChatResponse(expectedKeywords, modelName) {
        const responseLocator = await $('//div[contains(@class, "answerContainer_messageContainer__")]//p');
        await responseLocator.waitForDisplayed({ timeout: 15000 });
    
        const responseText = await responseLocator.getText();
        console.log(`🔍 Model (${modelName}) Response:`, responseText);
    
        // Check if response contains expected keywords
        let keywordMatched = expectedKeywords.some(keyword => responseText.toLowerCase().includes(keyword.toLowerCase()));
    
        if (!keywordMatched) {
            throw new Error(`❌ Model: ${modelName} - Expected keywords not found in response!\nExpected: ${expectedKeywords}\nActual: ${responseText}`);
        }
    
        // ✅ Success Message in Console
        console.log(`✅✅✅ SUCCESS: Model '${modelName}' generated a valid response with expected keywords! 🎉🔥`);
    }


    async clickAttachFileButton() {
        const attachFileBtn = await $('//span[contains(@class, "docUpload_uploadingIcon") and contains(@class, "cursor-pointer")]');
        await attachFileBtn.waitForExist({ timeout: 5000 });
        await attachFileBtn.waitForClickable({ timeout: 5000 });
        await attachFileBtn.click();

    }


    async uploadFile(filePath) {
        const fileInput = await $('input[type="file"]'); // Adjust this if your file input has a different selector
        await fileInput.waitForExist({ timeout: 5000 });
    
        console.log("📂 Uploading File:", filePath); // Debugging
    
        await fileInput.setValue(filePath); // Set the file
        await browser.pause(3000);
    
        console.log("✅ File uploaded successfully!");
    }
    

    async clickSendButton() {
        const sendButton = await $('//button[@data-testid="chat-footer-btn"]');
        await sendButton.waitForExist({ timeout: 5000 });
        await sendButton.click();

    }   

    async documentChatResponse() {
        const docResponse = await $(`//span[contains(.,'-sample.log')]`);
        await docResponse.waitForDisplayed({ timeout: 20000 }); // 10s wait
        await expect(docResponse).toBeDisplayed();

    }
    
    async clickGenerateImageButton() {
        const chatGenerateButton = await $('//div[contains(@class, "chatFooter_chatfooterbtn__")]');
        await chatGenerateButton.waitForExist({ timeout: 5000 });
        await chatGenerateButton.click();
        
    }

    async enterTextInImageChatPrompt() {
        const chatField = await $('//textarea[contains(@class, "SearchField_textarea__") and @placeholder="Send a message"]');
        await chatField.click();
        await chatField.setValue("cat");
        await browser.keys("Enter");
        await browser.pause(15000);

    }

    async displayTextImage() {
        const imageChatResponse = await $(`//div[contains(@class, 'style_imageContainer__KsNCO') and contains(@class, 'style_light__Lp0Um')]`);
        await imageChatResponse.waitForDisplayed({ timeout: 20000 }); // 10s wait
        await expect(imageChatResponse).toBeDisplayed();

    }

    

}

module.exports = new ChatResponsePage();
