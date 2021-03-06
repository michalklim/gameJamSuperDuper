export default class Preload extends Phaser.State {

    preload() {


      this.load.image('planet', 'images/sprites/UI/planeta.png');

      this.load.image('inner_clouds', 'images/sprites/UI/chmury_blizej.png');
      this.load.image('outer_clouds', 'images/sprites/UI/chmury_dalej.png');

      this.load.image('village_1', 'images/sprites/village_1.png');
      this.load.image('village_2', 'images/sprites/village_2.png');
      this.load.image('village_3', 'images/sprites/village_3.png');
      this.load.image('powersBtn', 'images/sprites/flames.png');
      this.load.image('bg', 'images/sprites/UI/Tlo.jpg');
      this.load.image('menu-bg', 'images/sprites/UI/menu-bg.jpg');
      this.load.image('mask', 'images/sprites/UI/mask.png');
      this.load.image('play-btn', 'images/sprites/UI/play-btn.png');

      this.load.image('instr-bg', 'images/sprites/UI/instr.jpg');
      this.load.image('cnt-btn', 'images/sprites/UI/continue.png');

      this.load.image('powerBtn-fire', 'images/sprites/UI/ogien.png');
      this.load.image('powerBtn-thunder', 'images/sprites/UI/piorun.png');
      this.load.image('powerBtn-wind', 'images/sprites/UI/wiatr.png');
      this.load.image('powerBtn-water', 'images/sprites/UI/woda.png');
      this.load.image('tryAgain', 'images/sprites/UI/skip kopia.png');
      this.load.image('gameOver-bg', 'images/sprites/UI/gameover.jpg');

      this.load.spritesheet('vulcan', 'images/sprites/disaster_meter.png', 135, 388);

      //Audio
      this.load.audio('fireSound', ['audio/sound/fire.mp3']);
      this.load.audio('waterSound', ['audio/sound/woda.mp3']);
      this.load.audio('thunderSound', ['audio/sound/piorun.mp3']);
      this.load.audio('windSound', ['audio/sound/wiatr.mp3']);

      //General Audio
      this.load.audio('playMusic', ['audio/music/play.mp3']);
      this.game.add.audio('playMusic');

      //Game sounds
      this.load.audio('successSound', ['audio/sound/udalosie.mp3']);
      this.game.add.audio('successSound');

      this.load.audio('failSound', ['audio/sound/poof.mp3']);
      this.game.add.audio('failSound');

      this.load.audio('game-over', ['audio/sound/gejover.mp3']);
      this.game.add.audio('game-over');

      this.load.audio('menuMusic', ['audio/music/menu.mp3']);
      this.game.add.audio('menuMusic');

      this.load.audio('menuDown', ['audio/sound/menu-click.mp3']);

      var disasterFrameHeight = 400;
      var disasterFrameWidth = 400;
      var disasterFrameMax = 10;
      this.load.spritesheet('fire', 'images/sprites/animations/fire.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      this.load.spritesheet('monster', 'images/sprites/animations/ufo_shit.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      this.load.spritesheet('clouds', 'images/sprites/animations/rain.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      this.load.spritesheet('locust', 'images/sprites/animations/szarancza.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      this.load.spritesheet('nativesIdle', 'images/sprites/animations/idle.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      this.load.spritesheet('nativesRitual', 'images/sprites/animations/ritual.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);

      this.game.load.bitmapFont('desyrel', 'images/sprites/UI/font.png', 'images/sprites/UI/font.xml');
    }

    create() {
      this.background = this.game.add.image(0, 0, 'menu-bg');
      this.background.scale.setTo(this.game.width / this.background.texture.width);

      this.loadingText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY,  'desyrel', 'Loading...',72);
      this.loadingText.position.x -= this.loadingText.width /2;

      this.game.sound.setDecodedCallback([
        'playMusic',
        'menuMusic',
        'fireSound',
        'waterSound',
        'thunderSound',
        'windSound',
        'menuDown',
        'successSound',
        'failSound',
        'game-over'
      ], this.showMenu, this);
    }
    showMenu() {
        this.state.start('Menu');
    }
}
