class BaseClass{
  //base blueprint properties
    constructor(x, y, width, height, angle) {
      //properties
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //defining a shape : rectangle
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //loading images
        this.image = loadImage("sprites/base.png");
        //adding it to the world
        World.add(world, this.body);
      }
      //function to display the object
      display(){
        //angle property is equal to the angle variable
        var angle = this.body.angle;
        push();
        //moving body motion
        translate(this.body.position.x, this.body.position.y);
        //the body should roate as per its angle
        rotate(angle);
        //the objects point should be at its center
        imageMode(CENTER);
        //image setup
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}