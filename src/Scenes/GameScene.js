/* eslint-disable no-undef */
import 'phaser';
import gameOptions from '../config/gameOptions';
import config from '../config/config';


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.addedPlatforms = 0;
    this.platformGroup = this.add.group({
      removeCallback(platform) {
        platform.scene.platformPool.add(platform);
      },
    });
    this.platformPool = this.add.group({
      removeCallback(platform) {
        platform.scene.platformGroup.add(platform);
      },
    });
    this.coinGroup = this.add.group({
      removeCallback(coin) {
        coin.scene.coinPool.add(coin);
      },
    });

    this.coinPool = this.add.group({
      removeCallback(coin) {
        coin.scene.coinGroup.add(coin);
      },
    });

    this.playerJumps = 0;
    this.addPlatform(
      config.width,
      config.width / 2,
      config.height * gameOptions.platformVerticalLimit[1],
    );
    this.player = this.physics.add.sprite(
      gameOptions.playerStartPosition,
      config.height * 0.7,
      'player',
    );
    this.player.setGravityY(gameOptions.playerGravity);


    // end create
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
