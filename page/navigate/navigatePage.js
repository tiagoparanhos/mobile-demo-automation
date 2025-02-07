export class NavigatePage {
    get linkWebView() {
        return $('//android.widget.TextView[@text="Webview"]');
    }

    get menuWeb() {
        return $('//android.widget.Button[@text="Toggle navigation bar"]');
    }

    get searchButton() {
        return $('//android.widget.Button[@text="Search (Command+K)"]');
    }

    get titleText() {
        return $('//android.view.View[@text="Next-gen browser and mobile automation test framework for Node.js"]');
    }

    async clickElement(element) {
        await element.waitForExist();
        await element.click();
    }

    async isElementDisplayed(element) {
        await element.waitForExist();
        return await element.isDisplayed();
    }

    async clickLinkWebView() {
        await this.clickElement(this.linkWebView);
    }

    async isWebViewDisplayed() {
        return await this.isElementDisplayed(this.menuWeb) && await this.isElementDisplayed(this.searchButton);
    }
}

export default new NavigatePage();
