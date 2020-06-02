/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext';
import gameOptions from '../config/gameOptions';


export default class nameScene extends Phaser.Scene {
  constructor() {
    super('nameScene');
  }

  create() {
    const info = this.add.text(400, 200, 'Enter your name then press enter', {
      fontSize: 30,
      fixedWidth: 800,
      fixedHeight: 100,
      color: '#ffff',
      align: 'center',
    }).setOrigin(0.5);

    const inputText = this.add
      .rexInputText(500, 290, 10, 10, {
        type: 'text',
        placeholder: 'your name here',
        fontSize: '24px',
        color: '#ffffff',
        align: 'center',
        border: 1,
        borderColor: '#ffff',
      })
      .resize(400, 100);

    this.input.keyboard.addKey('ENTER').on('down', () => {
      if (inputText.text === '') {
        info.text = 'empty name not alowed!';
      } else {
        gameOptions.playerName = inputText.text.trim();
        this.scene.start('Title');
      }
    });
  }
}