import loginPage from '@page/login/loginPage';
import { credentials } from '@support/credentials';

const loginSteps = {
    clickLoginButton: async () => {
        await loginPage.clickLoginButton();
    },

    performLogin: async () => {
        await loginPage.login(credentials.email, credentials.password);
    },

    performInvalidEmailLogin: async () => {
        await loginPage.login(invalidCredentials.email, credentials.password);
    },

    verifyInvalidPasswordMessage: async () => {
        await loginPage.verifyInvalidPasswordMessage();
    },

    verifyInvalidEmailMessage: async () => {
        await loginPage.verifyInvalidEmailMessage();
    },

    verifyLoginSuccess: async () => {
        const success = await loginPage.isLoginSuccessful();
        if (!success) {
            throw new Error('Login falhou');
        }
    }
};

export default loginSteps;