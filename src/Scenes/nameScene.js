/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'phaser';
import InputText from 'phaser3-rex-plugins/plugins/inputtext';
import gameOptions from '../config/gameOptions';
import config from '../config/config';


export default class nameScene extends Phaser.Scene {
  constructor() {
    super('nameScene');
  }

  create() {
    const info = this.add.text(400, 200, 'Enter your name', {
      fontSize: 30,
      fixedWidth: 800,
      fixedHeight: 100,
      color: '#ffff',
      align: 'center',
    }).setOrigin(0.5);

    const inputText = this.add
      .rexInputText(400, 250, 10, 10, {
        type: 'text',
        placeholder: 'username',
        fontSize: '24px',
        color: '#A9A9A9',
        align: 'center',
      })
      .resize(400, 100)
      .on('textchange', inputText => {
        if (/^[a-z]+$/g.test(inputText.text)) {
          info.text = 'Valid name';
        } else {
          info.text = 'This kind of name is not alowed!';
        }
      });
  }
}