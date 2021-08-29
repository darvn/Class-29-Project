class Stone {
    constructor(x, y, r){
        var options = {
            restitution : 0.8
        }


        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        World.add(world, this.body)
    }

    show(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y)
        ellipse(0, 0, this.r);
        pop();

        console.log("hi")
    }

}