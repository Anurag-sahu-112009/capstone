class Ball{
    constructor(x,y){
        var options={
            restitution:3,
            density:2,
            frictionAir:0.0005,
        }
        this.body=Bodies.circle(x,y,75,options)
        World.add(world,this.body)
        this.radius = 75;
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        stroke("white")
        strokeWeight(6)
        fill("black")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}