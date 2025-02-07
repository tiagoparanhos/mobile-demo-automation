export class HomePage {
    get logoWebdriverIO() {
        return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]');
    }

    get titleText() {
        return $('//android.widget.TextView[@text="WEBDRIVER"]');
    }

    get descriptionText() {
        return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]');
    }

    async isElementDisplayed(element) {
        await element.waitForExist();
        await browser.saveScreenshot('./traces/home/display.png');
        return await element.isDisplayed();
    }

    async isLogoDisplayed() {
        return await this.isElementDisplayed(this.logoWebdriverIO);
    }

    async isTitleDisplayed() {
        return await this.isElementDisplayed(this.titleText);
    }

    async isDescriptionDisplayed() {
        return await this.isElementDisplayed(this.descriptionText);
    }
}

export default new HomePage();
