class Board {
  constructor(x, y, width, height) {
    
     var options = {
    //   isStatic: false   //this is in the right format but it is should be false so it doesn't fall
       isStatic: true  //this is correct. this code prevents the board from falling
    //   Static: true    //this is wrong because it is just static it should be isStatic
    //   isStatic= true  //this is wrong because it has equal sign it should be a colon
     };


    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/board.png");

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
}
