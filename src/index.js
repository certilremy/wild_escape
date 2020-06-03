/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import 'phaser';
import css from './style.css';
import config from './config/config';
import GameScene from './Scenes/GameScene';
import gameOver from './Scenes/gameOver';
import BootScene from './Scenes/bootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import nameScene from './Scenes/nameScene';
import leaderBoard from './Scenes/leaderBoard';
import Model from './model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('nameScene', nameScene);
    this.scene.add('gameOver', gameOver);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('leaderBoard', leaderBoard);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
