import 'dotenv/config';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import moduleAlias from 'module-alias';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

moduleAlias.addAliases({
    '@steps': join(__dirname, './tests/steps'),
    '@page': join(__dirname, './page'),
    '@support': join(__dirname, './support/usrs'),
});

export const config = {
    runner: 'local',
    specs: ['./tests/specs/**/*.js'],
    framework: 'mocha',
    maxInstances: 1,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeSession: function (config, capabilities, specs) {
        require('module-alias/register');
    },
    before: function (capabilities, specs) {
        console.log('O browser está pronto para ser usado.');
    },
    afterTest: async function (specs, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    services: [
        ['appium', {
            command: 'appium',
            args: {
                relaxedSecurity: true,
                address: 'localhost',
                log: './appium.log'
            }
        }],
        ['browserstack', {
            browserstackLocal: true
        }]
    ],
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,
    capabilities: [
        {
            'appium:deviceName': 'Samsung Galaxy S22',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
             platformName: 'android',
            'appium:app': process.env.BROWSERSTACK_ANDROID_APP_ID,
            'appium:appPackage': 'com.wdiodemoapp',
            'appium:autoGrantPermissions': true,
            'appium:browserstack.debug': true,
            'bstack:options': {
                projectName: 'Meu Projeto',
                buildName: 'Build Principal',
                userName: process.env.BROWSERSTACK_USER,
                accessKey: process.env.BROWSERSTACK_KEY
            },
        
            platformName: 'ios',
            'appium:deviceName': 'iPhone 14 Pro Max',
            'appium:platformVersion': '16',
            'appium:automationName': 'XCUITest',
            'appium:app': process.env.BROWSERSTACK_IOS_APP_ID,
            'bstack:options': {
              projectName: 'ios',
              buildName: 'Build Principal',
              userName: process.env.BROWSERSTACK_USER,
              accessKey: process.env.BROWSERSTACK_KEY
            },
        }
    ]
};
