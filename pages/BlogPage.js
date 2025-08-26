const BasePage = require('./BasePage');

class Blog extends BasePage {
  async AssertGreeting() {
    const GreetingHeading = await $("//button[normalize-space()='New Chat']");
    await expect(GreetingHeading).toBeDisplayed();
  }

  async Blogbtn() {
    const BlogbtnLocator = await $(
      "//div[@data-testid='sidebar-blog' and .//span[text()='Blogger AI']]"
    );
    await BlogbtnLocator.click();
  }

  async verifyBlogAIVisible() {
    const blogAILocator = await $(
      "//div[contains(@class, 'font-inter') and contains(., 'Blogger AI')]"
    );
    await expect(blogAILocator).toBeDisplayed();
  }

  async BlogTopicField(topicText) {
    const topicInput = await $(
      "//textarea[starts-with(@placeholder, 'Include your target audience')]"
    );
    await topicInput.waitForDisplayed({ timeout: 5000 });
    await topicInput.setValue(topicText);
  }
  async selectHowToGuideContent() {
    const contentOption = await $(
      "//div[p[normalize-space()='📚 How-to Guide']]"
    );
    await contentOption.waitForDisplayed({ timeout: 5000 });
    await contentOption.click();
  }

  async selectLengthOption(length) {
    const lengthOption = await $(
      `//div[.//span[text()='500 - 1000 words'] and contains(@class, 'cursor-pointer')]`
    );
    await lengthOption.waitForDisplayed({ timeout: 5000 });
    await lengthOption.click();
  }

  async clickButton(buttonName) {
    const buttonLocator = await $(`//button[span[text()='Next']]`);
    await buttonLocator.waitForDisplayed({ timeout: 5000 });
    await buttonLocator.click();
  }

  async verifyWritingToneVisible() {
    const writingToneLocator = await $(
      "//h2[normalize-space(text())='Writing Tone']"
    );
    await writingToneLocator.waitForDisplayed({ timeout: 5000 });
    await expect(writingToneLocator).toBeDisplayed();
  }

  async writingToneSelection(tone) {
    const contentOption = await $(
      "//div[contains(@class, 'cursor-pointer') and .//p[normalize-space()='🎩 Professional']]"
    );
    await contentOption.waitForDisplayed({ timeout: 5000 });
    await contentOption.click();
  }

  async selectLanguage(language) {
    const dropdown = await $(
      "//div[contains(@class, 'react-select__single-value')]//div[text()='English']"
    );
    await dropdown.waitForDisplayed({ timeout: 5000 });
    await dropdown.click();
  }

  async enterTargetKeywords(keywords) {
    for (const keyword of keywords) {
      const keywordInput = await $(
        "//textarea[@placeholder='Comma-separated keywords list (up-to 20)']"
      );
      await keywordInput.waitForDisplayed({ timeout: 5000 });
      await keywordInput.setValue(keyword);
      await browser.keys("Enter");
      await browser.pause(500);
    }
  }

  async verifyAttachDocumentAndURLVisible() {
    const urlInputField = await $(
      "//input[@placeholder='https://example.com/research-article']"
    );
    const attachDocBtn = await $("//button[@aria-label='Add Source URL']");

    await attachDocBtn.waitForDisplayed({ timeout: 5000 });
    await urlInputField.waitForDisplayed({ timeout: 5000 });
  }

  async enterResearchURL(url) {
    const urlInput = await $(
      "//input[@placeholder='https://example.com/research-article']"
    );
    await urlInput.waitForDisplayed({ timeout: 5000 });
    await urlInput.setValue(url);
  }

  async checkOptionByLabel(labelText) {
    const checkboxLabel = await $(
      `//label[contains(text(), 'Prioritize SEO optimization')]`
    );
    await checkboxLabel.waitForDisplayed({ timeout: 5000 });
    const checkbox = await checkboxLabel.$("//input[@type='checkbox']");
    const isChecked = await checkbox.isSelected();
    if (!isChecked) {
      await checkboxLabel.click();
    }
  }

  async clickGenerateArticle() {
    const generateButton = await $(
      "//button[@type='button' and contains(., 'Generate Article') and .//span[contains(text(), 'credits')]]"
    );
    await generateButton.waitForClickable({ timeout: 10000 });
    await generateButton.click();
  }


  async verifyTextVisible(expectedText) {
    const textElement = await $(
      `//span[contains(text(), 'Crafting Your Article') and ./span[text()='🤖']]`
    );
    await textElement.waitForDisplayed({ timeout: 15000 });
  }

  async verifyTextVisible(expectedText) {
    const textElement = await $(
      `//h1[normalize-space(text())='Writing your blog...']`
    );
    await textElement.waitForDisplayed({ timeout: 15000 });
  }

  async verifyTextVisible(expectedText) {
    const textElement = await $(
      `//h1[normalize-space(text())='Your Article is Ready!']`
    );
    await textElement.waitForDisplayed({ timeout: 60000 });
  }
}

module.exports = new Blog;