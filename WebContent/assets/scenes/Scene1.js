
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var player_PhotoRoom = this.add.image(306.74445, 146.7762, "textures", "player-PhotoRoom");
		
		var coin_PhotoRoom = this.add.image(524.7317, 157.79385, "textures", "coin-PhotoRoom");
		
		this.fPlayer_PhotoRoom = player_PhotoRoom;
		this.fCoin_PhotoRoom = coin_PhotoRoom;
		
	}
	
	
	
	/* START-USER-CODE */
	
	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fPlayer_PhotoRoom);
		this.physics.add.existing(this.fCoin_PhotoRoom);
		
		this.physics.add.overlap(this.fPlayer_PhotoRoom, this.fCoin_PhotoRoom, this.hit, null, this);
		
		this.createScore();
	}
	
	createScore() {
		this.score = 0;
		
		var style = { font: "20px Arial", fill: "#fff"};
		this.scoreText = this.add.text(20, 20, "score: " +	this.score, style);
	}
	
	hit(){
		this.fCoin_PhotoRoom.x = Phaser.Math.Between(100, 600);
		this.fCoin_PhotoRoom.y = Phaser.Math.Between(100, 300);
		
		this.score += 1;
		
		this.scoreText.setText("score: " + this.score);
		this.tweens.add({
			targets: this.fPlayer_PhotoRoom,
			duration: 200,
			scaleX: 1.5,
			scaleY: 1.5,
			yoyo: true
		})
	}

	update() {
		if(this.cursors.down.isDown){
			this.fPlayer_PhotoRoom.y += 4;
		} else if(this.cursors.up.isDown){
			this.fPlayer_PhotoRoom.y -=4;
		} 
		
		if(this.cursors.right.isDown){
			this.fPlayer_PhotoRoom.x +=4;
		} else if(this.cursors.left.isDown){
			this.fPlayer_PhotoRoom.x -=4;
		}
		

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
