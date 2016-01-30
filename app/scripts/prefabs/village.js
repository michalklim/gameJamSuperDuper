export default class Village extends Phaser.Sprite {

  constructor({ game, x, y, planetCircle}) {
    var asset = 'village';

    super(game, x, y, asset, 1);

    this.game = game;

    this.anchor.setTo(0.5);

    this.game.physics.arcade.enable(this);
    this.rotation = game.physics.arcade.angleToXY(this, planetCircle.x, planetCircle.y) - 90 * (Math.PI / 180);

    this.natives = this.game.add.group();
    this.natives.enableBody = true;

    this.isSafe = false;

    this.animations.add('fire', 10, true);
    this.animations.add('locust', 10, true);
    this.animations.add('clouds', 10, true);
    this.animations.add('monster', 10, true);
  }

  startDisaster(disasterAndMiracle) {
    this.isSafe = false;
    this.disasterAndMiracle = disasterAndMiracle;
    this.animations.play(disasterAndMiracle.mirracle);
  }

  stopDisaster(miracle) {
    console.log("stop disaster" + miracle);
    if(_.isUndefined(this.disasterAndMiracle)) return;

    if(_.isNull(this.disasterAndMiracle)) return;

    if(miracle === this.disasterAndMiracle.miracle){
      this.isSafe = true;
      this.animations.stop();
    }
  }

  destroy() {
     if(this.isSafe) {
       this.game.globalScore.incrementMiracles();
       console.log("Village is safe");
       return;
     }

    console.log("Village has bad luck");
    this.game.globalScore.incrementFailedDisasters();
  }
}
