# DeftGPT-Automation

# Run - npm install

1) Setup Gmail API Authentication:

Run - node gmailAuth.js

Follow the instructions:

- Open the provided OAuth link in your browser.
- Log in with your Gmail account.
   Email: automationtesting077@gmail.com
   Password: ahsan@123
- Allow access.
- Authentication successful! (Token is saved in token.json)

2) To execute test cases:

npx wdio wdio.conf.js --logLevel debug

3) add the credentials.json file to the folder before running the test.
