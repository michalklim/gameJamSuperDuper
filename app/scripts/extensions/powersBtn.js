export default class PowersBtn extends Phaser.Sprite {

    constructor({game, x, y, asset, label, style, powerSound, name}) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5);

        this.name = name;
        this.label = label;
        this.style = style;
        this.powerSound = powerSound;
        this.game = game;

        this.scale.setTo(0.25);
        this.inputEnabled = true;
        this.input.enableDrag(true);
        this.dragMusic = this.game.add.audio(this.powerSound);

        this.initialPos = {
            x: x,
            y: y
        };

        this.events.onDragStart.add(this.onDragStart, this);
        this.events.onDragStop.add(this.onDragStop, this);
    }
    onDragStart() {
        this.dragMusic.fadeIn(300);
    }
    onDragStop(item) {
      console.log('item: ' + item);
      this.dragMusic.stop();

      let villageToRescue = _.find(this.game.villages, (village) => {
        return Phaser.Rectangle.intersects(this.getBounds(), village.getBounds());
      });

      if(!(_.isUndefined(villageToRescue) || _.isNull(villageToRescue))) {
        console.log("nanana");

        villageToRescue.stopDisaster(item.name);
      }

      item.x = this.initialPos.x;
      item.y = this.initialPos.y;
    }
}
