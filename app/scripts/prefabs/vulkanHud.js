export default class VulkanHud extends Phaser.Group {
    constructor({ game, globalScore }) {
        super(game);
        this.game = game;
        this.globalScore = globalScore;
    }
};