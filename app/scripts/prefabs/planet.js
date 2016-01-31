import Circle from '../models/circleModel'

export default class Planet extends Phaser.Sprite {
  constructor({ game, x, y, asset}) {
    super(game, x, y, asset);

    this.game = game;
    this.targetDim = window.innerWidth;
    this.activate();
    this.basicX = this.x;
  }
  activate() {
    this.smoothed = false;
    this.scale.setTo(this.targetDim / this.texture.width);
    this.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this);

  }

  rotate(value) {
    this.rotation += value;
  }
  

  getCenterCircle() {
    return new Circle(0, 0, this.basicX * 1.48);
  }
}
