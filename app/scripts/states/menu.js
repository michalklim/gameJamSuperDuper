import TextButton from '../extensions/textbutton';

export default class Menu extends Phaser.State {

   constructor(){
    super();
   }

    create() {
      this.music = this.music = this.game.sound.play('menuMusic');
      this.music.loopFull();

      //background
      this.background = this.game.add.image(0, 0, 'menu-bg');
      this.background.scale.setTo(this.game.width / this.background.texture.width);

      //Mask
      this.mask = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY , 'mask');
      this.mask.anchor.x = 0.5;
      this.mask.anchor.y = 0.5;
      this.mask.scale.setTo(0.4);
      this.maskTween = this.add.tween(this.mask).from( { y: 60, rotation: 720 }, 600, Phaser.Easing.Quadratic.InOut, true);

      //Play Button
      this.playBtn = this.game.add.button(this.game.world.centerX, this.game.world.height - 150, 'play-btn', this.startGame, this);
      this.playBtn.scale.setTo(0.2);
      this.playBtn.position.x -= 113;
    }

    startGame() {
      this.game.sound.play('menuDown')
      this.music.stop();
      this.state.start('Instruction');
    }
}
