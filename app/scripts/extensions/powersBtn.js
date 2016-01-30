export default class PowersBtn extends Phaser.Sprite {

    constructor({game, x, y, asset, label, style}) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5);

        this.label = label;
        this.style = style;
        this.text = new Phaser.Text(this.game, 0, 0, this.label, this.style);
        this.text.anchor.setTo(0.5);


        this.addChild(this.text);

    }
}
