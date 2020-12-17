class Form{
    constructor(){}

    display(){
      var title = createElement('h2');
      title.html("Car Racing Game");
      title.position(140,0);
      var input = createInput("Name");
      var button = createButton("Play");
      var greetings = createElement('h3');
      input.position(400,200);
      button.position(500,230);
      button.mousePressed(function(){
          input.hide();
          button.hide();
          var name = input.value();
          playerCount += 1;
          player.update(name);
          player.updateCount(playerCount);
          greetings.html("Hi, How are you " + name);
          greetings.position(400,200);
      })
    }
}