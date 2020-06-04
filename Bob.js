class Bob {
    constructor (x, y, diameter) {
        var options = {
            //isStatic: true,
            restitution : 0.3,
            friction : 0.5,
            density : 2
        }    
        this.body = Bodies.circle(x, y, diameter, options)
        World.add(world, this.body);
        this.diameter = diameter;
    }
    display(){
        ellipseMode(CENTER);
        var pos = this.body.position;
        //push()
        //translate(pos.x, pos.y)
        fill("red");
        ellipse (pos.x, pos.y, this.diameter + 25);
        //pop()
    }
}