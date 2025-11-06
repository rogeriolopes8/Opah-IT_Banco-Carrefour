const HomeScreen = require('./home.screen');

class DragScreen {
  get imgDropZone() { return $('~drop-target'); }     // ajuste com o inspector
  get piece1() { return $('~drag-l1'); }
  get piece2() { return $('~drag-l2'); }
  get piece3() { return $('~drag-l3'); }
  get piece4() { return $('~drag-l4'); }
  get successMsg() { return $('~success'); }

  async open() {
    await HomeScreen.goToDrag();
  }

  async dragAndDrop(source, target) {
    const rectSource = await source.getRect();
    const rectTarget = await target.getRect();

    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          {
            type: 'pointerMove',
            duration: 0,
            x: Math.floor(rectSource.x + rectSource.width / 2),
            y: Math.floor(rectSource.y + rectSource.height / 2)
          },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 200 },
          {
            type: 'pointerMove',
            duration: 500,
            x: Math.floor(rectTarget.x + rectTarget.width / 2),
            y: Math.floor(rectTarget.y + rectTarget.height / 2)
          },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);

    await driver.releaseActions();
  }

  async solvePuzzle() {
    await this.open();
    await this.dragAndDrop(this.piece1, this.imgDropZone);
    await this.dragAndDrop(this.piece2, this.imgDropZone);
    await this.dragAndDrop(this.piece3, this.imgDropZone);
    await this.dragAndDrop(this.piece4, this.imgDropZone);
  }
}

module.exports = new DragScreen();
