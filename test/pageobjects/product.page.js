
const Page = require('./page');

class ProductsPage extends Page {
    get btnPlatform () {
        return $('Platform');
    }
    async platform () {
        await this.btnSubmit.click();
    }
    open () {
        return super.open('/');
    }
}

module.exports = new ProductsPage();
