export default class Preload extends Phaser.State {

    preload() {

      this.load.image('planet', 'images/test/kolo.png');
      this.load.image('village', 'images/sprites/village_0.png');
      this.load.image('powersBtn', 'images/sprites/flames.png');
      this.load.image('village', 'images/sprites/village.png');
      this.load.image('bg', 'images/sprites/UI/Tlo.jpg');

        this.load.spritesheet('vulcan', 'images/sprites/wulkan_HUD.png', 331, 300);

        this.load.audio('fireSound', ['audio/sound/fire.mp3']);
        this.load.audio('waterSound', ['audio/sound/woda.mp3']);
        this.load.audio('thunderSound', ['audio/sound/piorun.mp3']);
        this.load.audio('earthSound', ['audio/sound/ziemia.mp3']);
        this.load.audio('windSound', ['audio/sound/wiatr.mp3']);

      //Audio

      this.load.audio('fireSound', ['audio/sound/fire.mp3']);
      this.load.audio('waterSound', ['audio/sound/woda.mp3']);
      this.load.audio('thunderSound', ['audio/sound/piorun.mp3']);
      this.load.audio('earthSound', ['audio/sound/ziemia.mp3']);
      this.load.audio('windSound', ['audio/sound/wiatr.mp3']);
    }

    create() {
        this.state.start('Menu');
    }

}
