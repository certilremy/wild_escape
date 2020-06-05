/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: 0x0c88c7,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
  },
};
