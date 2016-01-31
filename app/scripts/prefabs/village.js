export default class Village extends Phaser.Sprite {

  constructor({ game, x, y, planetCircle, asset}) {

    super(game, x, y, asset, 1);

    this.game = game;
    this.anchor.setTo(0.5);
    this.scale.setTo(0.8);

    var animationOffset = -150;

    var fireDisasterSprite = this.game.add.sprite(animationOffset, -200, 'fire');
    this.addAnimation(fireDisasterSprite, 'fire');

    var locustDisasterSprite = this.game.add.sprite(animationOffset, -200, 'locust');
    this.addAnimation(locustDisasterSprite, 'locust');

    var cloudsDisasterSprite = this.game.add.sprite(animationOffset, -200, 'clouds');
    this.addAnimation(cloudsDisasterSprite, 'clouds');

    var monsterDisasterSprite = this.game.add.sprite(animationOffset, -200, 'monster');
    this.addAnimation(monsterDisasterSprite, 'monster');

    this.nativesRitualSprite = this.game.add.sprite(animationOffset, -200, 'nativesRitual');
    this.addAnimation(this.nativesRitualSprite, 'nativesRitual');

    this.nativesIdleSprite = this.game.add.sprite(animationOffset, -200, 'nativesIdle');
    this.addAnimation(this.nativesIdleSprite, 'nativesIdle');

    this.stopAnimation(fireDisasterSprite);
    this.stopAnimation(locustDisasterSprite);
    this.stopAnimation(cloudsDisasterSprite);
    this.stopAnimation(monsterDisasterSprite);

    this.disasterAnimations = {
      fire: fireDisasterSprite,
      locust: locustDisasterSprite,
      clouds: cloudsDisasterSprite,
      monster: monsterDisasterSprite
    };

    this.game.physics.arcade.enable(this);
    this.rotation = game.physics.arcade.angleToXY(this, planetCircle.x, planetCircle.y) - 90 * (Math.PI / 180);

    this.natives = this.game.add.group();
    this.natives.enableBody = true;

    this.isSafe = false;
  }

  addAnimation(sprite, key){
    this.addChild(sprite);
    sprite.animations.add(key);
    sprite.animations.play(key, 10, true);
  }

  startDisaster(disasterAndMiracle) {
    this.isSafe = false;
    this.disasterAndMiracle = disasterAndMiracle;
    var name = disasterAndMiracle.disaster;

    this.startAnimation(this.disasterAnimations[name]);
  }

  stopDisaster(miracle) {
    if(_.isUndefined(this.disasterAndMiracle)) return;

    if(_.isNull(this.disasterAndMiracle)) return;

    if(miracle === this.disasterAndMiracle.miracle){
      console.log("happy miracle: " + miracle);

      this.stopAnimation(this.disasterAnimations[this.disasterAndMiracle.disaster]);
      this.isSafe = true;
    }
  }

  destroy() {
     if(this.isSafe) {
       this.game.globalScore.incrementMiracles();
       console.log("Village is safe");
     } else {
       console.log("Village has bad luck");
       this.game.globalScore.incrementFailedDisasters();
     }

    _.forEach(Object.keys(this.disasterAnimations), (name) => {
      this.stopAnimation(this.disasterAnimations[name]);
    });
  }

  startAnimation(animationSprite) {
    animationSprite.visible = true;
    this.nativesIdleSprite.visible = false;
    this.nativesRitualSprite.visible = true;
  }

  stopAnimation(animationSprite) {
    animationSprite.visible = false;
    this.nativesIdleSprite.visible = true;
    this.nativesRitualSprite.visible = false;
  }
}
