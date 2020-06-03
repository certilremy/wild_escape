/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Help');
  }

  create() {
    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    this.text = this.add.text(250, 20, 'How to play', { fontSize: 40, fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', (pointer) => {
      this.scene.start('Title');
    });

    this.text = this.add.text(150, 60, 'Left click on the scene to jump', { fontSize: 30, fill: '#fff' });
    this.text = this.add.text(150, 100, "Collect jewell and don't fail!", { fontSize: 30, fill: '#fff' });
  }
}
