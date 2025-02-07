export class LoginPage {
    get loginButton() {
        return $('//android.widget.TextView[@text="Login"]');
    }

    get emailField() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get submitButton() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
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

    async clickLoginButton() {
        await this.clickElement(this.loginButton);
    }

    async login(email, password) {
        await this.setValue(this.emailField, email);
        await this.setValue(this.passwordField, password);
        await this.clickElement(this.submitButton);
    }

    async isLoginSuccessful() {
        const welcomeText = await $('//android.widget.TextView[@text="Welcome"]');
        await browser.saveScreenshot('./traces/login/loginSucesso.png');
        return await this.isElementDisplayed(welcomeText);
    }

    async verifyInvalidPasswordMessage() {
        const errorMessage = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText('Please enter at least 8 characters');
    }

    async verifyInvalidEmailMessage() {
        const errorMessage = await $('//android.widget.TextView[@text="Please enter a valid email address"]');
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText('Please enter a valid email address');
    }
}

export default new LoginPage();