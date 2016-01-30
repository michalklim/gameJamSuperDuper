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
        this.activate();
        this.dragDropTestCircle = null;
    }
    activate() {
        this.addPowers();
    }

    addPowers() {
        const POS_X_STEP = 68;
        const POS_Y = 68;

        const fire = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX - POS_X_STEP * 2,
            y: POS_Y,
            asset: 'powersBtn',
            powerSound: 'fireSound'
        });

        this.add(fire);

        const water = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX - POS_X_STEP,
            y: POS_Y,
            asset: 'powersBtn',
            powerSound: 'waterSound'
        });

        this.add(water);

        const lighting = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX,
            y: POS_Y,
            asset: 'powersBtn',
            powerSound: 'thunderSound'
        });

        this.add(lighting);

        const wind = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX + POS_X_STEP,
            y: POS_Y,
            asset: 'powersBtn',
            powerSound: 'windSound'
        });

        this.add(wind);

        const ground = new PowersBtn({
            game: this.game,
            x: this.game.world.centerX + POS_X_STEP * 2,
            y: POS_Y,
            asset: 'powersBtn',
            powerSound: 'earthSound'
        });

        this.add(ground);
    }
};
