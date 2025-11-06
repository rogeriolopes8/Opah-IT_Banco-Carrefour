const HomeScreen = require('./home.screen');

class WebviewScreen {
  async open() {
    await HomeScreen.goToWebview();
  }

  get webTitle() { return $('//android.view.View[@text="Next-gen browser"]'); } // exemplo, ajuste se precisar

  async waitForWebviewLoaded() {
    // aguarda o contexto web aparecer
    await driver.pause(3000); // simples; se quiser, pode usar driver.getContexts()
  }
}

module.exports = new WebviewScreen();
