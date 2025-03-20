
Feature: Search History Functionality

Scenario: Searching and Verifying Chat History
  Given I am on the login page
  When I enter "automationtesting077@gmail.com" in email field
  And I click on Login button
  Then I should see Email Sent page
  When I click on the magic link in email
  Then I should see 'Hello, Automation!' heading
  When I click and enter text in the search field
  And I click on the Search result text
  Then I should see search history text in chat
  When I click On Setting button
  And I click on Logout button
  Then I should see log into your account text

