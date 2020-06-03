/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'phaser';
import api from '../api';

export default class leaderBoard extends Phaser.Scene {
  constructor() {
    super('leaderBoard');
  }


  create() {
    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    this.text = this.add.text(250, 20, 'Leader Board!', { fontSize: 40, fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', (pointer) => {
      this.scene.start('Title');
    });
    let position = 60;
    const displayPlayers = async () => {
      const scoreList = await api.getScore();
      scoreList.forEach((element) => {
        this.text = this.add.text(150, position, `Name: ${element.user}    score:${element.score}`, { fontSize: 30, fill: '#fff' });
        position += 40;
      });
    };

    displayPlayers();
  }
}