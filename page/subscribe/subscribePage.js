export class SubscribePage {
    get linkRegistrar() {
        return $('//android.widget.TextView[@text="Sign up"]');
    }

    get emailField() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get confirmPasswordField() {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]');
    }

    get submitButton() {
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup');
    }

    async clickElement(element) {
        await element.waitForExist();
        await element.click();
    }

    async setValue(element, value) {
        await element.waitForExist();
        await element.setValue(value);
    }

    async isElementDisplayed(element) {
        await element.waitForExist();
        return await element.isDisplayed();
    }

    async clickSignUpLink() {
        await this.clickElement(this.linkRegistrar);
    }

    async fillRegistrationForm(email, password, confirmPassword) {
        await this.setValue(this.emailField, email);
        await this.setValue(this.passwordField, password);
        await this.setValue(this.confirmPasswordField, confirmPassword);
    }

    async submitRegistration() {
        await this.clickElement(this.submitButton);
    }
}

export default new SubscribePage();
