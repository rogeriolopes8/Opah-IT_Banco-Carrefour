const HomeScreen = require('./home.screen');

class FormsScreen {
  get inputText() { return $('~input-text'); }
  get switchInput() { return $('~switch'); }
  get dropdown() { return $('~Dropdown'); } // às vezes é ~dropdown, confere no inspector
  get dropdownOptionWdio() { return $('//android.widget.CheckedTextView[@text="webdriver.io"]'); }
  get btnSubmit() { return $('~button-Active'); }
  get msgResult() { return $('~message'); }

  async open() {
    await HomeScreen.goToForms();
  }

  async fillForm(text) {
    await this.open();
    await this.inputText.setValue(text);
    await this.switchInput.click();
    await this.dropdown.click();
    await this.dropdownOptionWdio.click();
    await this.btnSubmit.click();
  }

  async submitEmpty() {
    await this.open();
    await this.btnSubmit.click();
  }

  async getResult() {
    await this.msgResult.waitForDisplayed();
    return this.msgResult.getText();
  }
}

module.exports = new FormsScreen();
