/* eslint-disable no-undef */
import 'phaser';
import api from '../api';

export default class leaderBoard extends Phaser.Scene {
  constructor() {
    super('leaderBoard');
  }


  create() {
    this.text = this.add.text(250, 20, 'Leader Board!', { fontSize: 40, fill: '#fff' });
    let position = 60;
    const displayPlayer = async () => {
      const scoreList = await api.getScore();
      scoreList.forEach((element) => {
        this.text = this.add.text(150, position, `Name: ${element.user}    score:${element.score}`, { fontSize: 30, fill: '#fff' });
        position += 40;
      });
    };

    displayPlayer();
  }
}