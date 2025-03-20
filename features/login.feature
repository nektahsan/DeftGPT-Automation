
Feature: Login Functionality

  Scenario: User logs in successfully
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see 'Hello, Automation!' heading
    When I click On Setting button
    And I click on Logout button
    Then I should see log into your account text



  Scenario: Verify User Logout Functionality
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see 'Hello, Automation!' heading
    When I click On Setting button
    And I click on Logout button
    Then I should see log into your account text



