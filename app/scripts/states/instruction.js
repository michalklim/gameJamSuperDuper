import TextButton from '../extensions/textbutton';

export default class Instruction extends Phaser.State {

    constructor(){
        super();
    }

    create() {

        //background
        this.background = this.game.add.image(0, 0, 'instr-bg');
        this.background.scale.setTo(this.game.width / this.background.texture.width);

        //Play Button
        this.playBtn = this.game.add.button(this.game.world.centerX, this.game.world.height - 150, 'cnt-btn', this.startGame, this);
        this.playBtn.scale.setTo(0.2);
        this.playBtn.position.x -= 113;
    }

    startGame() {
        this.state.start('Play');
    }
}
