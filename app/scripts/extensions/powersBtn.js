export default class PowersBtn extends Phaser.Sprite {

    constructor({game, x, y, asset, label, style, powerSound}) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5);

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
        this.dragMusic.fadeIn(1000);
    }
    onDragStop(item) {
        this.dragMusic.stop();

        item.x = this.initialPos.x;
        item.y = this.initialPos.y;
    }
}
