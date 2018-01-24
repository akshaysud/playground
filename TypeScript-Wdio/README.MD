# Getting started

1.  Install Node.JS (version 8 or above)
    http://nodejs.org (*Useful link* - https://stackoverflow.com/questions/11284634/upgrade-nodejs-to-the-latest-version-on-mac-os )
1.  Install Java SE Development (version 1.8 or above)
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
	`Useful troubleshooting link` - https://stackoverflow.com/questions/18007804/cant-uninstall-java-7-jdk-on-mac-os-x-mountain-lion-10-8-4
1.	Install typescript globally `npm install -g typescript`
1.  `npm install`
1.	Install selenium drivers `npm run selenium -- install`
1.	Start selenium `npm run selenium -- start`
1.	Test if the setup works my running `npm run tests`

*Note* - For test data, please enter your username and password in test_data.ts:

`const data = {
			email: 'xxxxx',
			password: 'xxxxx',
		}
`

# Setting up Selenium Grid (*Optional*)

1.	`npm run selenium-hub`
1.	Open another terminal instance and run `npm run selenium-node`
1.	Test if the grid is running successfully by opening http://localhost:4444/grid/console

# Running tests

### To run a specific test

```bash
npm run test -- <path-to-test.js>
```

### To all acceptance tests

```bash
npm run tests
```

# WebdriverIO doco

http://webdriver.io/

# To-do 
1. React to posts - In Progress
2. Post a poll
3. Vote on the poll 
4. Post a photo 
5. Post an album 
