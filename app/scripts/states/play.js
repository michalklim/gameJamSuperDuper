import HUD from '../prefabs/hud';
import Planet from '../prefabs/planet';
import Village from '../prefabs/village';

export default class Play extends Phaser.State {

    create() {
      // constants
      this.eventAreasAngles = [330, 60, 180, 360];

      this.planet = new Planet({
        game: this.game,
        x: this.world.centerX,
        y: this.world.centerY + window.innerHeight * 1.5,
        asset: 'planet'
      });
      this.game.stage.addChild(this.planet);

      // add villages
      this.villages = this.add.group();
      let planetCircle = this.planet.getCenterCircle();


      console.log("planetCircle.x: " + planetCircle.x);
      console.log("planetCircle.y: " + planetCircle.y);

      _.forEach(_.range(10), () => {

        let angle = _.random(245, this.eventAreasAngles[0]) * (Math.PI / 180);
        let x = planetCircle.x + Math.cos(angle)*planetCircle.r;
        let y = planetCircle.y + Math.sin(angle)*planetCircle.r;

        console.log("planetCircle.y:" + planetCircle.y + " ; angle:" + angle + " ; r:"+ planetCircle.r +  " ; x:"+x, " ; y:"+y);

        let sets = {
          game: this.game,
          x: x,
          y: y
        };
        this.addVillage(sets);
      });

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

      this.music.loopFull();
    }

    update() {
    }

    addVillage(sets) {
      let village = new Village(sets);
      this.villages.add(village);

      this.game.debug.spriteInfo(village, 32, 64);
    }

    hitEffect(obj, color) {
        let tween = this.game.add.tween(obj);
        let emitter = this.game.add.emitter();
        let emitterPhysicsTime = 0;
        let particleSpeed = 100;
        let maxParticles = 10;

        tween.to({tint: 0xff0000}, 100);
        tween.onComplete.add(() => {
            obj.tint = 0xffffff;
        });
        tween.start();

        emitter.x = obj.x;
        emitter.y = obj.y;
        emitter.gravity = 0;
        emitter.makeParticles('particle');

        if (obj.health <= 0) {
            particleSpeed = 200;
            maxParticles = 40;
            color = 0xff0000;
        }

        emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
        emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
        emitter.start(true, 500, null, maxParticles);
        emitter.update = () => {
            emitterPhysicsTime += this.game.time.physicsElapsed;
            if(emitterPhysicsTime >= 0.6){
                emitterPhysicsTime = 0;
                emitter.destroy();
            }

        };
        emitter.forEach(particle => particle.tint = color);
        if (!this.player.alive) {
            this.game.world.bringToTop(this.overlay);
        }
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
