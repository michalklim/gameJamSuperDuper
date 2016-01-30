export default class Preload extends Phaser.State {

    preload() {
      this.load.image('planet', 'images/test/kolo.png');
      this.load.image('village', 'images/sprites/village_0.png');
      this.load.image('powersBtn', 'images/sprites/flames.png');
      this.load.image('planet', 'images/test/kolo.png')
      this.load.image('village', 'images/sprites/village.png');
      this.load.image('bg', 'images/sprites/UI/Tlo.png');

      //UI POWERS
      this.load.image('powerBtn-fire', 'images/sprites/UI/ogien.png');
      this.load.image('powerBtn-thunder', 'images/sprites/UI/piorun.png');
      this.load.image('powerBtn-wind', 'images/sprites/UI/wiatr.png');
      this.load.image('powerBtn-water', 'images/sprites/UI/woda.png');

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
