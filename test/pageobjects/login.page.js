
const Page = require('./page');

class LoginPage extends Page {
    get inputUsername () {
        return $('#user_login');
    }

    get inputPassword () {
        return $('#user_pass');
    }

    get btnSubmit () {
        return $('#wp-submit');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
