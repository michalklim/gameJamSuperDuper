import PowersBtn from '../extensions/powersBtn';

export default class PowersHud extends Phaser.Group {
    constructor({game, x}) {
        super(game);
        this.game = game;
        this.x = x;

        this.score = 0;
        this.scoreLabel = 'Score: ';
        this.scoreText = new Phaser.Text(this.game, 20, 14, this.scoreLabel + this.score, {
            font: '13px Verdana',
            fill: 'white',
            align: 'center'
        });
        this.activate();
    }
    activate() {
        this.addPowers();
    }

    addPowers() {
        const POS_X_STEP = 80;
        const POS_Y = 128;

        const fire = new PowersBtn({
            game: this.game,
            x: -POS_X_STEP * 2.5,
            y: POS_Y,
            asset: 'powerBtn-fire',
            powerSound: 'fireSound'
        });

        this.addChild(fire);

        const water = new PowersBtn({
            game: this.game,
            x: - POS_X_STEP,
            y: POS_Y,
            asset: 'powerBtn-water',
            powerSound: 'waterSound'
        });

        this.add(water);

        const lighting = new PowersBtn({
            game: this.game,
            x: POS_X_STEP,
            y: POS_Y,
            asset: 'powerBtn-thunder',
            powerSound: 'thunderSound'
        });

        this.add(lighting);

        const wind = new PowersBtn({
            game: this.game,
            x: POS_X_STEP * 2.5,
            y: POS_Y,
            asset: 'powerBtn-wind',
            powerSound: 'windSound'
        });

        this.add(wind);
    }
};
