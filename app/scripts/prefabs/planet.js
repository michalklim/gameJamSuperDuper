import Circle from '../models/circleModel'

export default class Planet extends Phaser.Sprite {
  constructor({ game, x, y, asset}) {
    super(game, x, y, asset);

    this.game = game;
    this.targetDim = window.innerWidth;
    this.activate();
  }
  activate() {
    this.smoothed = false;
    this.scale.setTo(this.targetDim / this.texture.width);
    this.anchor.setTo(0.5);
    this.game.physics.arcade.enable(this);

    //Planet keyboard steering
    this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.AKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.DKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

    //Planet mousewheel steering
    this.game.input.mouse.mouseWheelCallback = (e) => {
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      this.rotation += delta * 0.15;
    };
  }

  update() {
    if (this.leftKey.isDown || this.AKey.isDown)
    {
      this.rotation -= 0.04;
    }
    else if (this.rightKey.isDown || this.DKey.isDown)
    {
      this.rotation += 0.04;
    }
  }

  getCenterCircle() {
    return new Circle(0, 0, this.x);
  }
}
