import formsValidateSteps from '@steps/forms/formsValidateSteps';

describe('Forms Tests', () => {
    it('should verify the active button click and message @critical @smoke @forms @button_active', async () => {
        await formsValidateSteps.clickFormsLink();
        await formsValidateSteps.clickActiveButton();
        await formsValidateSteps.verifyActiveButtonMessage();
    });

    it('should verify inactive button visibility @critical @smoke @forms @button_inactive', async () => {
        await formsValidateSteps.clickFormsLink();
        await formsValidateSteps.verifyInactiveButton();
    });

    it('should validate toggle button ON and OFF behavior @critical @smoke @forms @toggle', async () => {
        await formsValidateSteps.clickFormsLink();
        await formsValidateSteps.toggleOnOffButton();
    });

    it('should verify input field behavior @critical @smoke @forms @input', async () => {
        await formsValidateSteps.clickFormsLink();
        await formsValidateSteps.fillInputField('webdriverio');
    });

    it('should verify dropdown options and selection @critical @smoke @forms @dropdown', async () => {
        await formsValidateSteps.clickFormsLink();
        await formsValidateSteps.verifyDropdownOptions();
    });
});
