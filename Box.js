//baby class of base class
class Box extends BaseClass {
  //properties in bluspring
  constructor(x, y, width, height){
    //transferring properties
    super(x,y,width,height);
    //loading specific image
    this.image = loadImage("sprites/wood1.png");
  }

};
