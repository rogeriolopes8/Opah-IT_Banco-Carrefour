const HomeScreen = require('../pageobjects/home.screen');
const FormsScreen = require('../pageobjects/forms.screen');

describe('Navegação', () => {
  it('deve navegar de Home para Forms e voltar para Home', async () => {
    // garante que a Home está aberta
    await HomeScreen.tabHome.waitForDisplayed();

    await FormsScreen.open();
    await FormsScreen.inputText.waitForDisplayed();

    await driver.back(); // ou clique em Home, se preferir
    await HomeScreen.tabHome.waitForDisplayed();
  });
});
