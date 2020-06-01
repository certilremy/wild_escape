/* eslint-disable no-undef */
import 'phaser';
import logo from '../assets/logo.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo2', logo);
  }

  create() {
    this.add.image(400, 300, 'logo2');
  }
}
function resize() {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowWidth / gameRatio}px`;
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`;
    canvas.style.height = `${windowHeight}px`;
  }
}

window.onload = () => {
  window.focus();
  resize();
  window.addEventListener('resize', resize, false);
};
