import formsValidatePage from '@page/forms/formsValidatePage';

const formSteps = {
    clickFormsLink: async () => {
        await formsValidatePage.clickLinkForms();
    },

    clickActiveButton: async () => {
        await formsValidatePage.clickBtnActive();
    },

    verifyActiveButtonMessage: async () => {
        await expect(formsValidatePage.msgBtnActive).toExist();
        await expect(formsValidatePage.msgBtnActive).toBeDisplayed();
        await expect(formsValidatePage.msgBtnActive).toHaveText('This button is active');
        await formsValidatePage.takeScreenshot('alertaBotaoActive');
    },

    verifyInactiveButton: async () => {
        await formsValidatePage.btnInactive.scrollIntoView();
        await expect(formsValidatePage.btnInactive).toExist();
        await expect(formsValidatePage.btnInactive).toBeDisplayed();
        await formsValidatePage.takeScreenshot('botaoInactive');
    },

    toggleOnOffButton: async () => {
        await expect(formsValidatePage.msgOnEOff).toBeDisplayed();
        await expect(formsValidatePage.msgOnEOff).toHaveText('Click to turn the switch ON');
        await formsValidatePage.takeScreenshot('btnOff');
        
        await formsValidatePage.clickBtnOnEOff();
        
        await expect(formsValidatePage.msgOnEOff).toBeDisplayed();
        await expect(formsValidatePage.msgOnEOff).toHaveText('Click to turn the switch OFF');
        await formsValidatePage.takeScreenshot('btnOn');
    },

    fillInputField: async (text) => {
        await formsValidatePage.preencherCampo(text);
        await expect(formsValidatePage.lblTxtDigitado).toBeDisplayed();
        await expect(formsValidatePage.lblTxtDigitado).toHaveText(text);
        await formsValidatePage.takeScreenshot('campoPreenchido');
    },

    verifyDropdownOptions: async () => {
        await expect(formsValidatePage.lblOpcoes).toHaveText('Select an item...');
        await formsValidatePage.clickOpcoes();

        await expect(formsValidatePage.opcaoWebdriver).toExist();
        await expect(formsValidatePage.opcaoWebdriver).toBeDisplayed();

        await expect(formsValidatePage.opcaoAppium).toExist();
        await expect(formsValidatePage.opcaoAppium).toBeDisplayed();

        await expect(formsValidatePage.opcaoApp).toExist();
        await expect(formsValidatePage.opcaoApp).toBeDisplayed();
        await formsValidatePage.takeScreenshot('opcoes');

        await formsValidatePage.opcaoAppium.click();
        await expect(formsValidatePage.lblOpcoes).toHaveText('Appium is awesome');
        await formsValidatePage.takeScreenshot('opcaoSelecionada');
    }
};

export default formSteps;
