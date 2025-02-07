import navigateSteps from '@steps/navigate/navigateSteps';

describe('Navigate Page Tests', () => {
    it('should open WebView and verify elements @critical @smoke @navigate', async () => {
        await navigateSteps.openWebView();
        await navigateSteps.verifyWebViewElements();
    });
});
