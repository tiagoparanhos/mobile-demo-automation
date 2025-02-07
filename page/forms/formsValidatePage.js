class FormsValidatePage {
    get linkForms() {
        return $('//android.widget.TextView[@text="Forms"]');
    }

    get btnActive() {
        return $('//android.widget.Button[@content-desc="button-active"]');
    }

    get msgBtnActive() {
        return $('//android.widget.TextView[@content-desc="message-button-active"]');
    }

    get btnInactive() {
        return $('//android.widget.Button[@content-desc="button-inactive"]');
    }

    get msgOnEOff() {
        return $('//android.widget.TextView[@content-desc="switch-text"]');
    }

    get btnOnEOff() {
        return $('//android.widget.Switch[@content-desc="switch"]');
    }

    get inputField() {
        return $('//android.widget.EditText[@content-desc="input"]');
    }

    get lblTxtDigitado() {
        return $('//android.widget.TextView[@content-desc="input-text-result"]');
    }

    get lblOpcoes() {
        return $('//android.widget.TextView[@content-desc="dropdown-text"]');
    }

    get opcaoWebdriver() {
        return $('//android.widget.CheckedTextView[@text="WebdriverIO"]');
    }

    get opcaoAppium() {
        return $('//android.widget.CheckedTextView[@text="Appium"]');
    }

    get opcaoApp() {
        return $('//android.widget.CheckedTextView[@text="Native App"]');
    }

    async clickLinkForms() {
        await this.linkForms.click();
    }

    async clickBtnActive() {
        await this.btnActive.click();
    }

    async clickBtnOnEOff() {
        await this.btnOnEOff.click();
    }

    async preencherCampo(text) {
        await this.inputField.setValue(text);
    }

    async clickOpcoes() {
        await this.lblOpcoes.click();
    }

    async takeScreenshot(name) {
        await browser.saveScreenshot(`./traces/forms/${name}.png`);
    }
}

export default new FormsValidatePage();