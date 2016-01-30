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
            asset: 'powersBtn',
            powerSound: 'fireSound'
        });

        this.add(this.fire);

        this.water = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'powersBtn',
            powerSound: 'waterSound'
        });

        this.add(this.water);

        this.lighting = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'powersBtn',
            powerSound: 'thunderSound'
        });

        this.add(this.lighting);

        this.wind = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'powersBtn',
            powerSound: 'windSound'
        });

        this.add(this.wind);

        this.ground = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'powersBtn',
            powerSound: 'earthSound'
        });

        this.add(this.ground);
    }
};
