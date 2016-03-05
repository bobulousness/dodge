'use strict'

var Dodge = {};
Dodge.Play = function () {};
Dodge.Play.prototype = {
  init: function() {
    console.log("%c--- booting ---\n compliments of urmum");
  },
  preload:function (){
    this.load.image('background', 'assets/ocstrm.png');
    this.load.spritesheet('obj', 'assets/blbrd.png', 31, 64, 4);
    this.load.spritesheet('player', 'assets/arcr.png', 96, 64, 23);
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,0);
    this.background.scale.set(1);

    //obj
    this.obj = this.add.sprite(31,64,'obj');
    this.obj.anchor.setTo(.5, .5);
    this.obj.animations.add('blink');
    this.animations.play('blink', 2, true);

    //player
    this.player = this.add.sprite(100,500,'obj');
    this.player.anchor.setTo(.0, .5);
    this.player.animationis.add('blink');
    this.player.animations.play('blink', 2, true);

    //keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
    if (this.cursors.left.isDown){
      this.player.x -= 4;
    };
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    };
  }

};

