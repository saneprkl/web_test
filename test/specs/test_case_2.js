
describe('Test case 2', () => {
    it('Header pages', async () => {
        
        await browser.maximizeWindow();
        await browser.url('/');
        
        const cookieBtn = await $('#hs-eu-confirmation-button')
        await cookieBtn.click()

        const platformBtn = await $("aria/Platform");
        const servicesBtn = await $("aria/Services");
        const customersBtn = await $("aria/Customers");

        let counter = 2
        for(let i = 0; i < counter; i++){
            await platformBtn.click()
            await servicesBtn.click()
            await customersBtn.click()
        }
    });
});