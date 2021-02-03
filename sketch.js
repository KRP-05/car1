var canvas,bgimg;
var gamestate=0,playerCount;
var database,form1,player1,game1;
function setup(){
  canvas= createCanvas(400,400);
  database=firebase.database();
game1 =new game()
game1.gamestate();
game1.start()
}
function draw(){

}