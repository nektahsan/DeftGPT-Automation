
Feature: Chat Generate Functionality


Scenario Outline: Verify Chat Response for Different AI Models

  Given I am on the login page
  When I enter "automationtesting077@gmail.com" in email field
  And I click on Login button
  Then I should see Email Sent page
  When I click on the magic link in email
  Then I should see 'Hello, Automation!' heading
  And I select "<Model Name>" from the chat model list
  When I click and enter text in chat prompt
  Then The chat response should contain relevant AI keywords for "<Model Name>"
  When I click On Setting button
  And I click on Logout button
  Then I should see log into your account text

Examples:
  | Model Name     |
  | Deepseek V3   |
  # | GPT-4o mini   |
  # | GPT-4-Omni   |
  # | GPT-o1   |
  # | GPT-o1-Mini   |


Scenario Outline: Generating Chat Images Using Different AI Models
  Given I am on the login page
  When I enter "automationtesting077@gmail.com" in email field
  And I click on Login button
  Then I should see Email Sent page
  When I click on the magic link in email
  Then I should see 'Hello, Automation!' heading
  When I click on generate image button
  And I select "<Model Name>" from the chat model list
  And I click and enter text in image chat prompt
  Then I should see image
  When I click On Setting button
  And I click on Logout button
  Then I should see log into your account text

Examples:
  | Model Name     |
  | Dall-E 2   |
  # | Dall-E 3   |
  # | Dall-E 3 HD   |



Scenario Outline: User uploads a file on different models and verifies response
  Given I am on the login page
  When I enter "automationtesting077@gmail.com" in email field
  And I click on Login button
  Then I should see Email Sent page
  When I click on the magic link in email
  Then I should see 'Hello, Automation!' heading
  And I select "<Model Name>" from the chat model list
  And I click on attach file button
  And I upload a file
  And I click on send chat button
  Then I should see filename in Document chat response
  When I click On Setting button
  And I click on Logout button
  Then I should see log into your account text

Examples:
  | Model Name     |
  | GPT-4o mini   |

