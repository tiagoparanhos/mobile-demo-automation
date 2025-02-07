import homeSteps from '@steps/home/homeSteps';

describe('Home Page Tests', () => {
    it('should display all home page elements @critical @smoke @home', async () => {
        await homeSteps.verifyHomePageElements();
    });
});
