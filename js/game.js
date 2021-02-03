class game{
    constructor(){

    }
    gamestate(){
        var gamestateref=database.ref('gamestate');
        gamestateref.on("value",function(data){
            gamestate=data.val();
        })
        

    }
    update(state){
database.ref('/').update({
    gamestate:state
})
    }
    start() {
        if(gamestate===0){
            player=new player();
            player.getCount();
            form=new form()
            form.display()
        }
    }
}