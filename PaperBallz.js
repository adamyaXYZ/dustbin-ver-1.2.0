
class PaperBallZ {
    constructor (radi){
        var Opt ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(300,175,radi,Opt);
        this.image = loadImage("paper.png")
    World.add(world,[this.body])
    }
    display() {
        var pos = this.body.position;
        
        
        push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,pos.x,pos.y)
        pop();
    }
}