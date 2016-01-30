import PowersBtn from '../extensions/powersBtn';

export default class PowersHud extends Phaser.Group {
    constructor({game, x}) {
        super(game);
        this.game = game;
        this.x = x;

        this.activate();

        this.dragDropTestCircle = null;

        this.scoreText = new Phaser.Text(this.game, this.game.world.width-250, 14, "Score: 0", {
            font: '35px Verdana',
            fill: 'white',
            align: 'center'
        });

        this.add(this.scoreText);
    }

    updateScore(score){
        this.scoreText.setText("Score: "+score);
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
