export default class Village extends Phaser.Sprite {

  constructor({ game, x, y}) {
    var asset = 'village';

    super(game, x, y, asset, 1);

    this.game = game;

    this.anchor.setTo(0.5);
    this.scale.setTo(0.8);

    this.game.physics.arcade.enable(this);
    //this.animations.add('spinning', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 30, true);
    //this.play('spinning');

    this.natives = this.game.add.group();
    this.natives.enableBody = true;
  }
}
