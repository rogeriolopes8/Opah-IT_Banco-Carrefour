const DragScreen = require('../pageobjects/drag.screen');

describe('Drag and Drop', () => {
  it('deve resolver o puzzle de drag and drop', async () => {
    await DragScreen.solvePuzzle();

    // valida mensagem de sucesso ou mudança visual
    await DragScreen.successMsg.waitForDisplayed();
    const text = await DragScreen.successMsg.getText();
    expect(text.toLowerCase()).to.contain('completed');
  });
});
