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
  }

  startDisaster(disasterAndMiracle) {
    this.isSafe = false;
    this.disasterAndMiracle = disasterAndMiracle;

    this.rotation+=45;
  }

  stopDisaster(miracle) {
    console.log("stop disaster" + miracle);
    if(_.isUndefined(this.disasterAndMiracle)) return;

    if(_.isNull(this.disasterAndMiracle)) return;

    if(miracle === this.disasterAndMiracle.miracle){
      this.isSafe = true;
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
