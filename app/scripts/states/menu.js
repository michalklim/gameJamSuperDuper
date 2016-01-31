import TextButton from '../extensions/textbutton';

export default class Menu extends Phaser.State {

   constructor(){
    super();
   }

    create() {
      this.music = this.music = this.game.sound.play('menuMusic');
      this.music.loopFull();


      //Play Button
      this.playBtn = this.game.add.button(this.game.world.centerX, 400, 'play-btn', this.startGame, this);
      this.playBtn.scale.setTo(0.2);
      this.playBtn.position.x -= 113;
    }

    startGame() {
      this.game.sound.play('menuDown')
      this.music.stop();
      this.state.start('Play');
    }
}
