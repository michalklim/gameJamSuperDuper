import HUD from '../prefabs/hud';
import Planet from '../prefabs/planet';
import Village from '../prefabs/village';
import PowersHud from '../prefabs/powersHud';

export default class Play extends Phaser.State {

    create() {
      // constants
      this.villageNumber = 10;
      this.targetDim = window.innerWidth * 1.6;

      //background
      this.background = this.game.add.image(0, 0, 'bg');
      this.background.scale.setTo(window.innerWidth / this.background.texture.width);

      //planet
      console.log(this.world);
      this.planet = new Planet({
        game: this.game,
        x: this.world.centerX,
        y: this.world.height * 1.5,
        asset: 'planet'
      });
      this.game.stage.addChild(this.planet);

      // add villages
      this.villages = this.add.group();
      this.villages.addMultiple(this.buildVillages());

        this.planet.addChild(this.villages);


        this.powersHud = new PowersHud({
            game: this.game,
            x: this.world.centerX
        });
        this.game.stage.addChild(this.powersHud);
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
}
