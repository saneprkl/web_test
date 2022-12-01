const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Login page', () => {
    it('Attempt to login', async () => {
        await LoginPage.open();

        await LoginPage.login('Santeri.lehtonen@gmail.com', 'seesamaukene');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged in successfully');
    });
});


