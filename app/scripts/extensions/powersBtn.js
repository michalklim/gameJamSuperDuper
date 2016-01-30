export default class PowersBtn extends Phaser.Sprite {

    constructor({game, x, y, asset, label, style, powerSound}) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5);

        this.label = label;
        this.style = style;
        this.powerSound = powerSound;
        this.game = game;

        this.text = new Phaser.Text(this.game, 0, 0, this.label, this.style);
        this.text.anchor.setTo(0.5);
        this.inputEnabled = true;
        this.input.enableDrag(true);
        this.addChild(this.text);
        this.dragMusic = this.game.add.audio(this.powerSound);

        this.events.onDragStart.add(this.onDragStart, this);
        this.events.onDragStop.add(this.onDragStop, this);

        this.activate();
    }
    activate() {

    }

    onDragStart() {
        this.dragMusic.fadeIn(2000);
    }
    onDragStop() {
        this.dragMusic.stop();
    }
}
