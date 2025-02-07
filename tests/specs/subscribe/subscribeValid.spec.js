import subscribeSteps from '@steps/subscribe/subscribeSteps';

describe('Test User Registration', () => {
    it('should register a new user successfully @critical @smoke @subscribe @subscribe_valid', async () => {
        await subscribeSteps.clickSignUpLink();
        await subscribeSteps.fillRegistrationForm();
        await subscribeSteps.submitRegistration();
    });
});

