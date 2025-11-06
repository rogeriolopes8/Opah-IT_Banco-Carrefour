class HomeScreen {
  get tabHome() { return $('~Home'); }
  get tabWebview() { return $('~WebView'); }
  get tabLogin() { return $('~Login'); }
  get tabForms() { return $('~Forms'); }
  get tabSwipe() { return $('~Swipe'); }
  get tabDrag() { return $('~Drag'); }

  get titleHome() { return $('~Home-screen'); } // ajuste se necessário

  async goToLogin() {
    await this.tabLogin.waitForDisplayed();
    await this.tabLogin.click();
  }

  async goToForms() {
    await this.tabForms.waitForDisplayed();
    await this.tabForms.click();
  }

  async goToWebview() {
    await this.tabWebview.waitForDisplayed();
    await this.tabWebview.click();
  }

  async goToSwipe() {
    await this.tabSwipe.waitForDisplayed();
    await this.tabSwipe.click();
  }

  async goToDrag() {
    await this.tabDrag.waitForDisplayed();
    await this.tabDrag.click();
  }
}

module.exports = new HomeScreen();
