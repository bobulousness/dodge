'use strict';


var random = Math.floor((Math.random() * 289) + 31);



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
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //background
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(50,0);
    this.background.scale.set(1);

    //obj
    this.obj = this.add.sprite(31,67,'obj');
    this.obj.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this.obj);
    this.body.velocity.y = 10
    /*
    this.obj.animations.add('blink');
    this.obj.animations.play('blink', 2, true);
    */

    //player
    this.player = this.add.sprite(100,400,'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('blink');
    this.player.animations.play('blink', 2, true);
    game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true
    this.player.body.bounce.setTo(0.3);
    this.player.body.drag.setTo(3000);

    //keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function () {
       
    if ( this.obj.y > 400){
      this.obj.y = 10
      this.obj.x = game.rnd.integerInRange(31,289);
     
    }
    //movement towards player
    if (this.obj.x > this.player.x) {
      this.obj.x -= 1;
    } 
    if (this.obj.x < this.player.x) {
      this.obj.x += 1;
    }


    //obj x boundaries
    if (this.obj.x < 0){
      this.obj.x = 31;
      this.obj.y = 10;
    }
    if (this.obj.x > 320){
      this.obj.x = 319;
      this.obj.y = 10;
    }
    //player movement
    if (this.cursors.left.isDown){
      this.player.x -= 4;
    }
    if (this.cursors.right.isDown) {
      this.player.x += 5;
    };
    game.physics.arcade.collide(this.obj, this.player, this.handleCollision);
  }
  handleCollision: function() {
    console.log ("YA GOOFED");
    game.state.start('play')
  }
};

