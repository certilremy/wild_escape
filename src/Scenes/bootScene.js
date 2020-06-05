/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import 'phaser';
import splashScreen from '../assets/katkat_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', splashScreen);
  }

  create() {
    this.scene.start('Preloader');
  }
}
