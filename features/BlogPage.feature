Feature: Creating a Blog post 

    Scenario: Blog is succesfully created after login 
        Given I am on the login page
        When I enter "automationtesting077@gmail.com" in email field
        And I click on Login button
        Then I should see Email Sent page
        When I click on the magic link in email
        # Then I should see the New Chat block
        And I click on Blogger AI button
        Then I should see Blogger AI text
        When I enter "The impact of AI on modern education" in the text box under "What do you want to write about?"
        And I click on the How-to Guide card
        And I select "1000-2000 words" as the blog length
        And I click on the "Next" button
        Then I should see writing tone selection
        When I click on the Professional card as the writing tone
        And I select "English" as the language
        And I enter the following target keywords:
            | AI in education       |
            | edtech tools          |
            | modern learning       |
            | personalized learning |
            | digital classrooms    |
        And I click on the "Next" button
        Then I should see options to attach a document and a URL link
        And I enter the URL "https://www.google.com/"
        And I check the option to "Prioritize SEO optimization"
        And I click on the Generate Article button
        Then I should see Crafting Your Article
        Then I should see Writing your blog...
        Then I should see Your Article is Ready!



