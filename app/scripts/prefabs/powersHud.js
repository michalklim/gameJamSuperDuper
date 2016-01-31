import PowersBtn from '../extensions/powersBtn';

export default class PowersHud extends Phaser.Group {
    constructor({game, x}) {
        super(game);
        this.game = game;
        this.x = x;

        this.activate();

        this.dragDropTestCircle = null;
    }

    updateScore(score){
        this.scoreText.text="Score: "+score;
    }

    activate() {
        this.addPowers();
        this.addScoreText();
    }

    addScoreText() {
        this.scoreText = this.game.add.bitmapText(0, 0, 'desyrel', 'Score: 0',72);
    }

    addPowers() {
        const POS_X_STEP = 80;
        const POS_Y = 128;

        const fire = new PowersBtn({
            game: this.game,
            x: -POS_X_STEP * 2.5,
            y: POS_Y,
            asset: 'powerBtn-fire',
            powerSound: 'fireSound',
            name: 'fire'
        });

        this.addChild(fire);

        const water = new PowersBtn({
            game: this.game,
            x: - POS_X_STEP,
            y: POS_Y,
            asset: 'powerBtn-water',
            powerSound: 'waterSound',
            name: "water"
        });

        this.add(water);

        const lighting = new PowersBtn({
            game: this.game,
            x: POS_X_STEP,
            y: POS_Y,
            asset: 'powerBtn-thunder',
            powerSound: 'thunderSound',
            name: "thunderbolt"
        });

        this.add(lighting);

        const wind = new PowersBtn({
            game: this.game,
            x: POS_X_STEP * 2.5,
            y: POS_Y,
            asset: 'powerBtn-wind',
            powerSound: 'windSound',
            name: 'wind'
        });

        this.add(wind);
    }
};
