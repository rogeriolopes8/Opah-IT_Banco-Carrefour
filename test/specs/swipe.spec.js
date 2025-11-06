const SwipeScreen = require('../pageobjects/swipe.screen');

describe('Swipe', () => {
  it('deve fazer swipe até o segundo card do carrossel', async () => {
    await SwipeScreen.open();

    await SwipeScreen.carousel.waitForDisplayed();
    await SwipeScreen.swipeLeft();

    // aqui você valida algo que só aparece no segundo card
    // exemplo: um texto ou id específico
    const secondCard = await $('~slideText-2'); // ajuste conforme o inspector
    await secondCard.waitForDisplayed();
  });
});
