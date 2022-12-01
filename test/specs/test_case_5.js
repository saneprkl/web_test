describe('Test case 5', () => {
    it('Cycle through urls', async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const cookieBtn = await $('#hs-eu-confirmation-button')
        await cookieBtn.click()
        const urls = ['/', '/products', '/services', '/customers', '/company', '/category/blog', '/careers', '/contact']

        await urls.forEach((url) => {
            browser.url(url)
        })

    });
});