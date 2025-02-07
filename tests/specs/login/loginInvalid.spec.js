import loginSteps from '@steps/login/loginSteps';

describe('Login Invalid Tests', () => {

    describe('Test email invalid Login', () => {  
        it('should log in unsuccessfully with invalid email @critical @smoke @login @login_invalid_email', async () => { 
            await loginSteps.clickLoginButton();
            await loginSteps.performInvalidEmailLogin();
            await loginSteps.verifyInvalidEmailMessage();
            await loginSteps.verifyInvalidEmailMessage();
        });
    });

    describe('Test password invalid Login', () => {  
        it('should log in unsuccessfully with invalid password @critical @smoke @login @login_invalid_password', async () => { 
            await loginSteps.clickLoginButton();
            await loginSteps.performInvalidPasswordLogin();
            await loginSteps.verifyInvalidPasswordMessage();
            await loginSteps.verifyInvalidEmailMessage();
        });
    });

});
