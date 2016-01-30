export default class Experimental extends Phaser.State {


    preload() {

        this.cameraWidth = 800;
        this.cameraHeight = 600;
        this.worldWidth = 1080;
        this.worldHeight = 1080;

        this.load.image('planet', 'images/test/kolo.png')
        this.game.stage.backgroundColor = '#123456';
    }

    create() {
        this.game.world.setBounds(0, 0, 2000, 2000);
        this.game.camera.y = 0;
        this.game.camera.x = (this.worldWidth/2)-(this.cameraWidth/2);
        //this.game.camera.x = 140;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.worldGroup = this.game.add.group();
        this.worldGroup.x = 0;
        this.worldGroup.y = this.cameraHeight/2;
        //this.worldGroup.y = 300;
        this.worldGroup.add(this.game.add.image(0, 0, 'planet'));

        //this.worldGroup.pivot.x = 300;
        //this.worldGroup.pivot.y = 300;

    }

    update() {
        if (this.cursors.left.isDown)
        {
            this.worldGroup.rotation -= 0.02;
        }
        else if (this.cursors.right.isDown)
        {
            this.worldGroup.rotation += 0.02;
        }
    }
}