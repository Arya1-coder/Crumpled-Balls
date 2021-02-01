class Paper{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            friction:5,
            density:1,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options); 
        this.Image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
     push();
     strokeWeight(4);
     stroke("black");
     fill("darkblue");
     imageMode(CENTER);
     image(this.Image,pos.x,pos.y,this.r,this.r);
     pop();
    }
}