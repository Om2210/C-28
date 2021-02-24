//baby class of base class
class Pig extends BaseClass {
  //properties
  constructor(x, y){
    //transferred properties
    super(x,y,50,50);
    //adding specific image
    this.image = loadImage("sprites/enemy.png");
  }

};