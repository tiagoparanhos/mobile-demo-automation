import subscribePage from '@page/subscribe/subscribePage';
import { credentials } from '@support/credentials';

const subscribeSteps = {
    clickSignUpLink: async () => {
        await subscribePage.clickSignUpLink();
    },

    fillRegistrationForm: async () => {
        await subscribePage.fillRegistrationForm(credentials.email, credentials.password, credentials.password);
    },

    submitRegistration: async () => {
        await subscribePage.submitRegistration();
    }
};

export default subscribeSteps;
