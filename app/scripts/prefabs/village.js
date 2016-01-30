export default class Village extends Phaser.Sprite {

  constructor({ game, x, y, planetCircle}) {
    var asset = 'village';

    super(game, x, y, asset, 1);

    this.game = game;

    this.anchor.setTo(0.5);
    this.scale.setTo(0.8);

    this.game.physics.arcade.enable(this);
    this.rotation = game.physics.arcade.angleToXY(this, planetCircle.x, planetCircle.y) - 90 * (Math.PI / 180);

    this.natives = this.game.add.group();
    this.natives.enableBody = true;
  }

  startDisaster(disaster) {
    this.ritual = ritual;
  }

  stopDisaster(miracle) {
      //make the village safe
  }

  destroy() {
      // if village is safe
          //do nothing
      //else
        //destroy
  }
}
