import Circle from '../models/circleModel'

export default class Planet extends Phaser.Sprite {
  constructor({ game, x, y, asset}) {
    super(game, x, y, asset);

    this.game = game;
    this.targetDim = window.innerWidth * 1.6;
    this.scale.setTo(this.targetDim / this.texture.width);
    this.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this);
  }

  getCenterCircle() {
    return new Circle(this.body.x, this.body.y, this.width/2);
  }
}

