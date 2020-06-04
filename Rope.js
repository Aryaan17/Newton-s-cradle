class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            //pointB : {x:this.offsetX, y:this.offsetY},
            'stiffness' : 0
            //'length' : 200
        }
        this.rope = Constraint.create(options);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        World.add(world, this.rope);
    }
    display() {
        strokeWeight(5);
        push()
        stroke("yellow");
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        pop()
    }
}