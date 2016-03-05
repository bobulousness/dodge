'use strict'

var Dodge = {};
Dodge.Play = function () {};
Dodge.Play.prototype = {
  init: function() {
    console.log("%c--- booting ---\n compliments of urmum");
  },
  preload:function (){
    this.load.image('background', 'assets/ocstrm.png');
    this.load.spritesheet('obj', 'assets/blbrd.png', 31, 67, 1);
    this.load.spritesheet('player', 'assets/arcr.png', 84, 51, 23);
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,0);
    this.background.scale.set(1);
    //obj
    this.obj = this.add.sprite(31,67,'obj');
    this.obj.anchor.setTo(0.5, 0.5);
    /*
    this.obj.animations.add('blink');
    this.obj.animations.play('blink', 2, true);
    */

    //player
    this.player = this.add.sprite(100,500,'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('blink');
    this.player.animations.play('blink', 2, true);

    //keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    this.obj.y -= 10

    if ( this.obj.y > 400){
      this.obj.y = 100;
    }

    if (this.cursors.left.isDown){
      this.player.x -= 4;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    };
  }

};

