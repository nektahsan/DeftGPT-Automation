// exports.config = {
//     runner: 'local',

//     // Web automation doesn't require Appium
//     path: '/',
//     port: 9515, // Default WebDriver port for ChromeDriver

//     // Define the test specs (Feature files location)
//     specs: ['./features/**/*.feature'], // Ensure feature files are inside `features/`

//     // Browser capabilities
//     capabilities: [{
//         maxInstances: 1,
//         browserName: 'chrome',
//         acceptInsecureCerts: true,
//     }],

//     // Log level
//     logLevel: 'info',

//     // Services (Ensure chromedriver is installed via `npm i --save-dev chromedriver`)
//     services: ['chromedriver'], 

//     // Framework configuration
//     framework: 'cucumber',

//     // Reporters
//     reporters: ['spec'],

//     // Cucumber options
//     cucumberOpts: {
//         // ignoreUndefinedDefinitions: false, // Ensure undefined steps fail the test
//         require: ['./features/step-definitions/login.steps.js'], // Load only this file explicitly
//         timeout: 60000,
//         ignoreUndefinedDefinitions: false,

//         backtrace: false,
//         requireModule: [],
//         dryRun: false,
//         failFast: false,
//         format: ['pretty'],
//         snippets: true,
//         source: true,
//         strict: true, // Ensures undefined steps are flagged
//         tagExpression: '', // Run all tests
//         timeout: 60000,
//         ignoreUndefinedDefinitions: false, // Ensures undefined steps cause failure
//     },

//     // Base URL for the tests
//     baseUrl: 'https://deftgpt.com',

//     // Hooks for better debugging
//     beforeScenario: async function (world) {
//         console.log(`Running scenario: ${world.pickle.name}`);
//     },

//     afterScenario: async function (world, result) {
//         console.log(`Scenario completed with status: ${result.status}`);
//     }
// };

const path = require('path');
const fs = require('fs');
require('dotenv').config(); // ✅ Load environment variables

exports.config = {
    runner: 'local',

    // Web automation doesn't require Appium
    path: '/',
    port: 9515, // Default WebDriver port for ChromeDriver

    // Define the test specs (Feature files location)
    specs: ['./features/**/*.feature'], // Ensure feature files are inside `features/`

    // Browser capabilities
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
    }],

    // Log level
    logLevel: 'info',

    // Services (Ensure chromedriver is installed via `npm i --save-dev chromedriver`)
    services: ['chromedriver'], 

    // Framework configuration
    framework: 'cucumber',

    // Reporters
    reporters: ['spec'],

    // Ensure WDIO explicitly loads the correct step definition files
    cucumberOpts: {
        require: fs.readdirSync(path.join(__dirname, './features/step-definitions'))
            .filter(file => file.endsWith('.js')) // Load only .js step definition files
            .map(file => path.join(__dirname, './features/step-definitions', file)), // Convert to absolute path
        timeout: 60000,
        ignoreUndefinedDefinitions: false,

        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        strict: true, // Ensures undefined steps are flagged
        tagExpression: '', // Run all tests
        timeout: 60000,
        ignoreUndefinedDefinitions: false, // Ensures undefined steps cause failure
    },

    // Base URL for the tests
    baseUrl: 'https://staging.deftgpt.com/en/login',

    // Hooks for better debugging
    beforeScenario: async function (world) {
        console.log(`Running scenario: ${world.pickle.name}`);
    },

    afterScenario: async function (world, result) {
        console.log(`Scenario completed with status: ${result.status}`);
    }
};

