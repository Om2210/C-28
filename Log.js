//baby class of base class
class Log extends BaseClass{
  //specific class properties
  constructor(x,y,height,angle){
    //transferring properties
    super(x,y,20,height,angle);
    //adding specific image
    this.image = loadImage("sprites/wood2.png");
    //providing a specific angle
    Matter.Body.setAngle(this.body, angle);
  }
}