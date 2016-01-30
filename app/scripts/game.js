import * as states from './states';

//const GAME = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);

const GAME = new Phaser.Game(800, 600, Phaser.AUTO);

Object.keys(states).forEach(state => GAME.state.add(state, states[state]));

//GAME.state.start('Boot');
GAME.state.start('Experimental');