
Feature: Login Functionality

  Scenario: User logs in successfully
    Given I am on the login page
    When I enter "automationtesting077@gmail.com" in email field
    And I click on Login button
    Then I should see Email Sent page
    When I click on the magic link in email
    Then I should see the 'New Chat' block
    When I click on the Profile Heading
    And I click on the Sign out button
    Then I should see the "Try DeftGPT for free" button on the landing page
    



  # Scenario: Verify User Logout Functionality
  #   Given I am on the login page
  #   When I enter "automationtesting077@gmail.com" in email field
  #   And I click on Login button
  #   Then I should see Email Sent page
  #   When I click on the magic link in email
  #   Then I should see the 'New Chat' block
  #   When I click On Setting button
  #   And I click on Logout button
  #   Then I should see log into your account text

  #   Scenario: Verify that login fails for an unregistered email 
  #   Given I am on the login page
  #   When I enter "kahntest@gmail.comn" in email field
  #   And I click on Login button
  #   Then I should see user not found message



