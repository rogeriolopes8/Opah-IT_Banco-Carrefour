const HomeScreen = require('./home.screen');

class LoginScreen {
  get inputEmail() { return $('~input-email'); }
  get inputPassword() { return $('~input-password'); }
  get btnLogin() { return $('~button-LOGIN'); }
  get btnSignup() { return $('~button-SIGN UP'); }
  get alertMessage() { return $('~message'); }       // alerta de sucesso/erro
  get btnOk() { return $('~button-OK'); }           // botão do alerta

  async open() {
    await HomeScreen.goToLogin();
  }

  async login(email, password) {
    await this.open();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  async signup(email, password) {
    await this.open();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSignup.click();
  }

  async getAlertText() {
    await this.alertMessage.waitForDisplayed();
    return this.alertMessage.getText();
  }

  async closeAlertIfVisible() {
    if (await this.btnOk.isDisplayed()) {
      await this.btnOk.click();
    }
  }
}

module.exports = new LoginScreen();
