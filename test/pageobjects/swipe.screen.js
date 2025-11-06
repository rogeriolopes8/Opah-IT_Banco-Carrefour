const HomeScreen = require('./home.screen');

class SwipeScreen {
  get carousel() { return $('~Carousel'); } // ajuste se preciso
  get cardSecond() { return $('~card 2'); } // exemplo

  async open() {
    await HomeScreen.goToSwipe();
  }

  async swipeLeft() {
    const { width, height } = await driver.getWindowSize();
    const startX = Math.floor(width * 0.8);
    const endX = Math.floor(width * 0.2);
    const y = Math.floor(height * 0.5);

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 200 },
          { type: 'pointerMove', duration: 500, x: endX, y },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
    await driver.releaseActions();
  }
}

module.exports = new SwipeScreen();
