
describe('Test case 3', () => {
    it('bullet points', async () => {
        await browser.maximizeWindow();
        await browser.url('/');
        const bullets = await $$('.swiper-pagination-bullet')
        const cookieBtn = await $('#hs-eu-confirmation-button')
        await cookieBtn.click()

        await bullets.forEach((bullet) => {
            bullet.click()
        })

    });
});