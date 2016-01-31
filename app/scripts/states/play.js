import Planet from '../prefabs/planet';
import Village from '../prefabs/village';
import PowersHud from '../prefabs/powersHud';
import GlobalScore from '../prefabs/globalScore';
import Disaster from '../prefabs/disaster'

export default class Play extends Phaser.State {

    create() {
      // constants
      this.villageNumber = 8;
      this.game.globalScore = new GlobalScore();

      //music
      this.music = this.game.sound.play('playMusic');
      this.music.volume -= 0.5;
      this.music.loopFull();

      //background
      this.background = this.game.add.image(0, 0, 'bg');
      this.background.scale.setTo(window.innerWidth / this.background.texture.width);

      //planet
      this.planet = new Planet({
        game: this.game,
        x: this.world.centerX,
        y: this.world.height * 1.5,
        asset: 'planet'
      });
      this.game.stage.addChild(this.planet);

      // add villages
      this.villages = this.add.group();

      var vlgs = this.buildVillages();
      this.game.villages = vlgs;

      this.villages.addMultiple(vlgs);
      this.planet.addChild(this.villages);

      //disasters
      this.disasters = Disaster(vlgs);
      this.disasters.run();

      //Powers Hud
      this.powersHud = new PowersHud({
          game: this.game,
          x: this.world.centerX
      });

      this.game.stage.addChild(this.planet);
      this.game.stage.addChild(this.powersHud);

        this.vulcan = this.game.add.sprite(this.game.width-200, 30, 'vulcan');
    }


    update() {
        this.powersHud.updateScore(this.game.globalScore.miracles);

        if(this.game.globalScore.failedDisasterLimitReached()){
            this.disasters.stop();
            this.gameOver();
        }

        if(this.vulcan.frame != this.game.globalScore.failedDisastersCount)
        {
            this.vulcan.frame = this.game.globalScore.failedDisastersCount;
    }
    }

    buildVillages() {
      let planetCircle = this.planet.getCenterCircle();

      let angleScope = 360/this.villageNumber;
      return _.map(_.range(this.villageNumber), (number) => {

        let asset = 'village_' + _.random(1, 3);
        let angle = _.random(number * angleScope, (number + 1) * angleScope) * (Math.PI / 180);
        let x = planetCircle.x + Math.cos(angle)*planetCircle.r;
        let y = planetCircle.y + Math.sin(angle)*planetCircle.r;

        let sets = {
          game: this.game,
          x: x,
          y: y,
          planetCircle: planetCircle,
          asset: asset
        };

        return new Village(sets);
      });
    }

    gameOver(){

        this.villages.removeAll();
        this.planet.destroy(true);
        this.powersHud.destroy(true);
        this.vulcan.destroy(true);
        this.music.destroy(true);

      this.game.state.start('Over');

    }

    render(){
      //this.game.debug.spriteInfo(this.overlay, 32, 32);
      this.game.debug.cameraInfo(this.game.camera,32,32);

      var village = this.game.villages[0];
      this.game.debug.spriteBounds(village);
    }
}
