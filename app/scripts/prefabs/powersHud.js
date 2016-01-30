import PowersBtn from '../extensions/powersBtn';

export default class PowersHud extends Phaser.Group {
    constructor({game}) {
        super(game);
        this.game = game;

        this.score = 0;
        this.scoreLabel = 'Score: ';
        this.scoreText = new Phaser.Text(this.game, 20, 14, this.scoreLabel + this.score, {
            font: '13px Verdana',
            fill: 'white',
            align: 'center'
        });


        this.fire = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'powersBtn'
        });

        this.add(this.fire);
    }
};
