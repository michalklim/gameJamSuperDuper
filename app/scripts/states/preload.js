export default class Preload extends Phaser.State {

    preload() {
      this.load.image('planet', 'images/sprites/UI/planeta.png');
      this.load.image('village', 'images/sprites/village_0.png');
      this.load.image('powersBtn', 'images/sprites/flames.png');
      this.load.image('bg', 'images/sprites/UI/Tlo.jpg');
      this.load.image('play-btn', 'images/sprites/UI/play-btn.png');

      this.load.image('powerBtn-fire', 'images/sprites/UI/ogien.png');
      this.load.image('powerBtn-thunder', 'images/sprites/UI/piorun.png');
      this.load.image('powerBtn-wind', 'images/sprites/UI/wiatr.png');
      this.load.image('powerBtn-water', 'images/sprites/UI/woda.png');

      this.load.spritesheet('vulcan', 'images/sprites/wulkan_HUD.png', 331, 300);

      //Audio
      this.load.audio('fireSound', ['audio/sound/fire.mp3']);
      this.load.audio('waterSound', ['audio/sound/woda.mp3']);
      this.load.audio('thunderSound', ['audio/sound/piorun.mp3']);
      this.load.audio('windSound', ['audio/sound/wiatr.mp3']);

      //General Audio
      this.load.audio('playMusic', ['audio/music/play.mp3']);
      this.game.add.audio('playMusic');

      this.load.audio('menuMusic', ['audio/music/menu.mp3']);
      this.game.add.audio('menuMusic');

      this.load.audio('menuDown', ['audio/sound/menu-click.mp3']);
      this.game.add.audio('menuDown');

      var disasterFrameHeight = 40;
      var disasterFrameWidth = 40;
      var disasterFrameMax = 10;
      //this.load.spritesheet('fire', 'assets/sprites/metalslug_mummy37xdisasterFrameWidth.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      //this.load.spritesheet('monster', 'assets/sprites/metalslug_mummy37xdisasterFrameWidth.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      //this.load.spritesheet('clouds', 'assets/sprites/metalslug_mummy37xdisasterFrameWidth.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
      //this.load.spritesheet('locust', 'assets/sprites/metalslug_mummy37xdisasterFrameWidth.png',disasterFrameHeight, disasterFrameWidth, disasterFrameMax);
    }

    create() {
      this.game.sound.setDecodedCallback([
        'playMusic',
        'menuMusic',
        'fireSound',
        'waterSound',
        'thunderSound',
        'windSound',
        'menuDown'
      ], this.showMenu, this);
    }
    showMenu() {
      this.state.start('Menu');
    }
}
