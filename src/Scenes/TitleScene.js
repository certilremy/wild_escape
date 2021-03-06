/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height,
      ),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }

  create() {
    this.gameLogo = this.add.sprite(80, 100, 'gameLogo');
    this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();
    this.centerButton(this.gameButton, 1);
    this.centerButton(this.gameLogo, 2);

    this.gameText = this.add.text(0, 0, 'Play', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', (pointer) => {
      this.scene.start('Game');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });

    this.optionsButton = this.add
      .sprite(300, 200, 'blueButton1')
      .setInteractive();
    this.centerButton(this.optionsButton);

    this.optionsText = this.add.text(0, 0, 'Options', {
      fontSize: '32px',
      fill: '#fff',
    });

    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on('pointerdown', (pointer) => {
      this.scene.start('Options');
    });

    this.creditsButton = this.add
      .sprite(300, 200, 'blueButton1')
      .setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.helpButton = this.add
      .sprite(300, 200, 'blueButton1')
      .setInteractive();
    this.centerButton(this.helpButton, -2);

    this.helpText = this.add.text(0, 0, 'Help', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.centerButtonText(this.helpText, this.helpButton);

    this.creditsText = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on('pointerdown', (pointer) => {
      this.scene.start('Credits');
    });

    this.helpButton.on('pointerdown', (pointer) => {
      this.scene.start('Help');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
