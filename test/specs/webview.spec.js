const WebviewScreen = require('../pageobjects/webview.screen');

describe('WebView', () => {
  it('deve carregar o site do WebdriverIO na aba WebView', async () => {
    await WebviewScreen.open();
    await WebviewScreen.waitForWebviewLoaded();

    // pega os contextos disponíveis (NATIVE_APP + WEBVIEW)
    const contexts = await driver.getContexts();
    expect(contexts.length).to.be.greaterThan(1);

    // troca para o contexto web
    await driver.switchContext(contexts[1]);

    // verifica se algum elemento típico da home do WebdriverIO está presente
    const title = await $('h1');
    await title.waitForDisplayed();

    // volta pro contexto nativo
    await driver.switchContext(contexts[0]);
  });
});
