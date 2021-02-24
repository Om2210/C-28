class SlingShot{
    //parameters of the blueprint
    constructor(bodyA, pointB){
        //properties of the constraint body
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        //defining a constraint body
        this.sling = Constraint.create(options);
        //adding the body into the world
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //commands to display the body
        if(this.sling.bodyA){
            //variable point a is equal to the position of body a
            var pointA = this.sling.bodyA.position;
            //pointB of the body is equal to the variable point b
            var pointB = this.pointB;
            //width
            strokeWeight(4);
            //line properties
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}