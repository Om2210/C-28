class Ground {
  //blueprint properties
    constructor(x,y,width,height) {
      //properties
      var options = {
          isStatic: true
      }
      //defining shape
      this.body = Bodies.rectangle(x,y,width,height,options);
      //width is equal to width and height is equal to height
      this.width = width;
      this.height = height;
      //adding bodies to the world
      World.add(world, this.body);
    }
    display(){
      //body's position is being placed in pos
      var pos =this.body.position;
      //centering the point 
      rectMode(CENTER);
      //adding colour
      fill("brown");
      //giving shape properties
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
