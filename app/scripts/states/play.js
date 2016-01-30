import HUD from '../prefabs/hud';
import Planet from '../prefabs/planet';
import Village from '../prefabs/village';
import PowersHud from '../prefabs/powersHud';

export default class Play extends Phaser.State {

    create() {
      // constants
      this.villageNumber = 10;

      this.planet = new Planet({
        game: this.game,
        x: this.world.centerX,
        y: this.world.centerY + window.innerHeight * 1.5,
        asset: 'planet'
      });
      this.game.stage.addChild(this.planet);

      // add villages
      this.villages = this.add.group();
      this.villages.addMultiple(this.buildVillages());

        this.planet.addChild(this.villages);


        this.powersHud = new PowersHud({
            game: this.game
        });
        this.game.stage.addChild(this.powersHud);


      this.hud = new HUD({
          game: this.game
      });

      this.game.input.onDown.add(() => {
          this.game.time.slowMotion = 1;
      });

      this.game.input.onUp.add(() => {
          this.game.time.slowMotion = 3;
      });

      this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
      this.overlayBitmap.ctx.fillStyle = '#fff';
      this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);

      this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
      this.overlay.visible = true;
      this.overlay.alpha = 0.75;

      this.music = this.game.add.audio('playMusic');
      this.gameOverSound = this.add.sound('gameOver');
    }

    update() {
        this.planet.rotation += 0.01;
    }

    buildVillages() {
      let planetCircle = this.planet.getCenterCircle();
      console.log("planetCircle.x:" + planetCircle.x + " ; planetCircle.y:" + planetCircle.y);

      let angleScope = 360/this.villageNumber;
      return _.map(_.range(this.villageNumber), (number) => {

        let angle = _.random(number * angleScope, (number + 1) * angleScope) * (Math.PI / 180);
        let x = planetCircle.x + Math.cos(angle)*planetCircle.r;
        let y = planetCircle.y + Math.sin(angle)*planetCircle.r;


        let sets = {
          game: this.game,
          x: x,
          y: y,
          planetCircle: planetCircle
        };

        return new Village(sets);
      });
    }

    gameOver(){
        this.game.time.slowMotion = 3;
        this.overlay.visible = true;
        this.game.world.bringToTop(this.overlay);
        let timer = this.game.time.create(this.game, true);
        timer.add(3000, () => {
            this.music.stop();
            this.gameOverSound.play();
            this.game.state.start('Over');
        });
        timer.start();
    }

    render(){
      //this.game.debug.spriteInfo(this.overlay, 32, 32);
      this.game.debug.cameraInfo(this.game.camera,32,32);
      //console.log("ala ma kota");
    }
}
