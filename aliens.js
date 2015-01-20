/**
 * Created by shcoder on 20.01.15.
 */
function rungame() {
    var width = navigator.isCocoonJS ? window.innerWidth * window.devicePixelRatio : window.innerWidth;
    var height = navigator.isCocoonJS ? window.innerHeight * window.devicePixelRatio : window.innerHeight;

    var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('logo', 'phaser.png');

    }

    function create () {
        if (navigator.isCocoonJS) {
            this.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
            this.stage.scale.setScreenSize(true);
        }
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

    }

};