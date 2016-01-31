import Circle from '../models/circleModel'

export default class Planet extends Phaser.Sprite {
  constructor({ game, x, y, asset}) {
    super(game, x, y, asset);

    this.game = game;
    this.targetDim = window.innerWidth;

    this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    this.smoothed = false;
    this.scale.setTo(this.targetDim / this.texture.width);
    this.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this);
  }

  update() {
    if (this.leftKey.isDown)
    {
      this.rotation -= 0.04;
    }
    else if (this.rightKey.isDown)
    {
      this.rotation += 0.04;
    }
  }

  getCenterCircle() {
    return new Circle(0, 0, this.x);
  }
}

