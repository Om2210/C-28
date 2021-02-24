//the bird class follows the code of the BaseClass
class Bird extends BaseClass {
  //additional elements in constructor blueprint
  constructor(x,y){
    //transferring the properties from the base class onto this class
    super(x,y,50,50);
    //adding an image
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
