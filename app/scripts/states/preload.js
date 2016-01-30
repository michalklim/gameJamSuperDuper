export default class Preload extends Phaser.State {

    preload() {
      this.load.image('planet', 'images/test/kolo.png')
      this.load.image('village', 'images/sprites/village.png');
      this.load.image('powersBtn', 'images/sprites/flames.png');


      this.load.audio('playMusic', ['audio/music/play.mp3']);
      this.load.audio('menuMusic', ['audio/music/menu.mp3']);

      this.load.audio('menuOver', ['audio/sound/menu-over.mp3']);
      this.load.audio('menuOut', ['audio/sound/menu-out.mp3']);
      this.load.audio('menuDown', ['audio/sound/menu-click.mp3']);

      this.load.audio('bulletHit', ['audio/sound/bullet-hit.mp3']);
      this.load.audio('enemyShot', ['audio/sound/enemy-shot.mp3']);
      this.load.audio('enemyExplosion', ['audio/sound/enemy-explosion.mp3']);
      this.load.audio('playerShot', ['audio/sound/player-shot.mp3']);
      this.load.audio('playerExplosion', ['audio/sound/player-explosion.mp3']);

      this.load.audio('gameOver', ['audio/sound/game-over.mp3']);
    }

    create() {
        this.state.start('Menu');
    }

}
