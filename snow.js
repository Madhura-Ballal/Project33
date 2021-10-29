class Snow {
    constructor(x,y,r){
        this.r=r
  this.body=Bodies.circle(x,y,r)
World.add(world,this.body);
this.Image=loadImage("snow5.webp");
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.Image,this.body.position.x,this.body.position.y,this.r,this.r)
        pop()
    }
}