
Feature: WorkSpace Functionality

  Scenario: Verify user can successfully create a workspace with uploaded files
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see 'Hello, Automation!' heading
    When I click on Workspace Button
    Then I should see Workspace text
    When I click on create a workspace button
    And I click and enter text in workspace field
    And I click on continue button
    And I click and select text for workspace
    And I click on continue button
    And I click and enter text in URL field
    And I click on add URl button
    And I click on continue button
    Then I should see Workspace text
    When I click On Setting button
    And I click on Logout button
    Then I should see log into your account text


  Scenario: Verify user can successfully create a workspace without adding files
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see 'Hello, Automation!' heading
    When I click on Workspace Button
    Then I should see Workspace text
    When I click on create a workspace button
    And I click and enter text in workspace field
    And I click on continue button
    And I click on cross button
    Then I should see Workspace name text
    When I click On Setting button
    And I click on Logout button
    Then I should see log into your account text

  Scenario: Verify that users can rename a thread
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see 'Hello, Automation!' heading
    When I click on Workspace Button
    Then I should see Workspace text
    When I click on existing workspace
    And I click on edit thread button
    Then I should see update thread message
    When I click On Setting button
    And I click on Logout button
    Then I should see log into your account text