
Feature: Login Functionality

  Scenario: User logs in successfully
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see 'Hello, Automation!' heading





