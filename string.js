class String{
    constructor(bodyA,pointB){
        var options = {
            stiffness:1.5,
            length:500,
            bodyA:bodyA,
            pointB:pointB,
        }
        this.string= Constraint.create(options)
        this.bodyA = bodyA;
        this.pointB = pointB;
        World.add(world,this.string)
    }
    display(){
        var pointA = this.string.bodyA.position
        var pointB = this.pointB
        stroke("white")
        strokeWeight(6)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}