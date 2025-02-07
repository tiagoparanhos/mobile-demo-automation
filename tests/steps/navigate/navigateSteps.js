import NavigatePage from '@page/navigate/navigatePage';
import { expect } from '@wdio/globals';

class NavigateSteps {
    async openWebView() {
        await NavigatePage.clickLinkWebView();
    }

    async verifyWebViewElements() {
        await expect(NavigatePage.isWebViewDisplayed()).resolves.toBe(true);
    }
}

export default new NavigateSteps();
