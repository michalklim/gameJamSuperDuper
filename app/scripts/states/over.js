import TextButton from '../extensions/textbutton';

export default class Over extends Phaser.State {

    create() {
      this.music = this.game.sound.play('game-over');
      this.background = this.game.add.image(0, 0, 'gameOver-bg');
      this.background.scale.setTo(this.game.width / this.background.texture.width);

      this.gameOverTitle = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY-200, 'desyrel', 'Game over',72);

        this.gameOverTitle.anchor.setTo(0.5);

        this.start =  this.game.add.button(this.game.world.centerX, this.game.world.height - 350, 'tryAgain');
        this.start.scale.setTo(0.5);
        this.start.position.x -= this.start.width / 2;


        this.btnOverSound = this.add.sound('menuOver');
        this.btnOutSound = this.add.sound('menuOut');
        this.btnDownSound = this.add.sound('menuDown');

        this.start.setOverSound(this.btnOverSound);
        this.start.setOutSound(this.btnOutSound);
        this.start.setDownSound(this.btnDownSound);

        this.start.onInputDown.add(()=>{
            this.state.start('Play');
        });

        this.gameOverPanel = this.add.group();
        this.gameOverPanel.add(this.gameOverTitle);
        this.gameOverPanel.add(this.start);

        this.scoreText = this.game.add.bitmapText(this.game.world.centerX , this.game.world.centerY-100, 'desyrel', 'Score: '+this.game.globalScore.miracles,72);
        this.scoreText.x -= this.scoreText.width/2;
    }
}
