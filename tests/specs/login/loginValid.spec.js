import loginSteps from '@steps/login/loginSteps';

describe('Test Valid Login', () => {  
    it('should log in successfully @critical @smoke @login @login_valid', async () => { 
        await loginSteps.clickLoginButton();
        await loginSteps.performLogin();
        await loginSteps.verifyLoginSuccess();
    });
});