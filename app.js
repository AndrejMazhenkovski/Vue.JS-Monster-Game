new Vue ({
el: '#app',

data: {
	newGame: true,
	playerHealth: 80,
	monsterHealth: 80,
	isPlayerTurn: true,

	logs: [''],

	


},

watch: {

	playerHealth: function (choek){
		if (choek <= 0){
			var ova = this;
			setTimeout(function(){
			alert ("Monster wins with" + ova.monsterHealth + " HP left !");
			ova.resetValues();
			ova.newGame = true;
			},500);

			
			
			

		}



		

		
	},

	monsterHealth: function(monsterot){
		if(monsterot <=0){
			var ova = this;
			setTimeout(function(){
				alert ("Player Wins with " + ova.playerHealth + " HP left");
				ova.resetValues();
				ova.newGame = true;


			} , 500);

			
			

		}
	}

	
},

methods: {

attack(){
	var playerHitDmg = Math.floor(Math.random() * 8 );
	var monsterHitDmg = Math.floor(Math.random() * 6);
	this.monsterHealth -= playerHitDmg;
	this.playerHealth -= monsterHitDmg;

	isPlayerTurn = true;
	this.logs.push("Player hits monster for " + playerHitDmg + " damage");
	isPlayerTurn = false;
	this.logs.push("Monster hits player for " + monsterHitDmg + " damage");

},

specialAttack(){
	var playerHitDmg = Math.floor(Math.random() * 12);
	var monsterHitDmg = Math.floor(Math.random() * 11);
	this.monsterHealth-= playerHitDmg;
	this.playerHealth -= monsterHitDmg;

	this.isPlayerTurn = true;
	console.log(this.isPlayerTurn);
	this.logs.push("Player hits monster for " + playerHitDmg + " damage");
	this.isPlayerTurn = false;
	console.log(this.isPlayerTurn);
	this.logs.push("Monster hits player for " + monsterHitDmg + " damage");
	
},

heal(){

	var playerHeal = 10;
	var monsterHitDmg = Math.floor(Math.random() * 10);

	if (this.playerHealth <=90){
		this.playerHealth -= monsterHitDmg;
		this.playerHealth += playerHeal;
		this.isPlayerTurn = true;
		this.logs.push("Player heals himself for "+ playerHeal + " points");
		this.isPlayerTurn = false;
		this.logs.push("Monster hits player for " + monsterHitDmg + " damage");


	}

	else {
		alert("You cannot heal at this time, health is above 90!");
	}
	
	
	
	


},

resetValues() {
this.monsterHealth = 80,
this.playerHealth = 80,
this.logs = []
},

startNewGame() {
this.monsterHealth = 100,
this.playerHealth = 100

}


}

})