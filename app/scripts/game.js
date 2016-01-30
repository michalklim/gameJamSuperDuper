import * as states from './states';

const conf = {
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: Phaser.AUTO,
  transparent: false,
  antialias: true,
  scaleMode: Phaser.ScaleManager.RESIZE
};

const GAME = new Phaser.Game(conf);

Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

GAME.state.start('Boot');
//GAME.state.start('Experimental');