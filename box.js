class Box{
    constructor(x,y){
        var options={
            restitution:1,
            density:2,
            friction:0.9,
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
        this.height = 50;
        this.width = 50;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        stroke("white")
        strokeWeight(6)
        fill("black")
        rect(0,0,this.width,this.height)
        pop()
    }
}
