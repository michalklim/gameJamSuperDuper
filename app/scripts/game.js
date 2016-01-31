import * as states from './states';

const conf = {
  width: 1280,
  height: 720,
  renderer: Phaser.AUTO,
  transparent: false,
  antialias: true,
  scaleMode: Phaser.ScaleManager.NO_SCALE
};

const GAME = new Phaser.Game(conf);

Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

GAME.state.start('Boot');