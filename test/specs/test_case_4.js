
describe('Test case 4', () => {
    it('Cycle dropdown', async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const cookieBtn = await $('#hs-eu-confirmation-button')
        await cookieBtn.click()
        const openDrop = await $('aria/Company')
        const aboutUs = await $('aria/About us')
        const blog = await $("aria/Blog");
        const careers = await $("aria/Careers");

        let counter = 3
        for(let i = 0; i < counter; i++) {
            await openDrop.click()
            await aboutUs.click()
            await openDrop.click()
            await blog.click()
            await openDrop.click()
            await careers.click()
        };
    });
});