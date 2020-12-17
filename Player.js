class Player{
    constructor(){}

    getCount(){
        var playCountRef = database.ref('playerCount');
        playCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
        
    }
     
    update(name){
        var playerIndex = "player"+ playerCount;
        database.ref(playerIndex).set({
            name : name
        })
    }
}