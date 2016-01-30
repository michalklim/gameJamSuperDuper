import Circle from '../models/circleModel'

export default class Planet extends Phaser.Sprite {
  constructor({ game, x, y, asset}) {
    super(game, x, y, asset);

    this.game = game;
    this.targetDim = window.innerWidth * 1.6;
    this.scale.setTo(this.targetDim / this.texture.width);
    this.game.physics.p2.enable(this, true);
    this.body.setCircle(this.width / 2);
    this.body.static = true;
  }

  getCenterCircle() {
    return new Circle(this.body.x, this.body.y, this.width/2);
  }
}

