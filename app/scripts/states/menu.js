import TextButton from '../extensions/textbutton';

export default class Menu extends Phaser.State {

   constructor(){
    super();
   }

    create() {

      this.music = this.music = this.game.sound.play('menuMusic');
      this.music.loopFull();

      this.start = new TextButton({
          game: this.game,
          x: this.game.world.centerX,
          y: this.game.world.centerY,
          asset: '',
          overFrame:2,
          outFrame: 1,
          downFrame: 0,
          upFrame: 1,
          label: 'Play!',
          style: {
              font: '56px Verdana',
              fill: 'Pink',
              align: 'center'
          }
      });

      this.start.setDownSound(this.game.sound.play('menuDown'));

      this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY-50, 'Axis Mundi Ultimate', {
        font: '46px Tahoma',
        fill: 'white',
        align: 'center'
      });

      this.title.anchor.setTo(0.5);

      this.start.onInputUp.add(()=>{
        this.music.stop();
        this.state.start('Play');
      });

      this.menuPanel = this.add.group();
      this.menuPanel.add(this.title);
      this.menuPanel.add(this.start);
    }
}
