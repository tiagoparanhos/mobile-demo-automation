import homePage from '@page/home/homePage';
import { expect } from '@wdio/globals'; 

class HomeSteps {
    async verifyHomePageElements() {
        await expect(homePage.isLogoDisplayed()).resolves.toBe(true);
        await expect(homePage.isTitleDisplayed()).resolves.toBe(true);
        await expect(homePage.isDescriptionDisplayed()).resolves.toBe(true);
    }
}

export default new HomeSteps();