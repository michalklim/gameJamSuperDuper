export default class Hud extends Phaser.Group {
    constructor({ game, player }) {
        super(game);
        this.game = game;
        this.player = player;
        this.width = 800;

        this.score = 0;
        this.scoreLabel = 'Score: ';
        this.scoreText = new Phaser.Text(this.game, 20, 14, this.scoreLabel + this.score, {
            font: '13px Verdana',
            fill: 'white',
            align: 'center'
        });

        this.add(this.scoreText);
    }
};
