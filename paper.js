class paper {
constructor(x,y,width,height){
var options={
             isStatic:false,
             restitution:0.3,
            friction:0.2,
             density:0.5,
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
this.image=loadImage("paper.png");
World.add(world,this.body)
}
 
display(){
 var angle=this.body.angle
// push();
 //translate(this.body.position.x,this.body.position.y);
// rotate(angle);
 imageMode(CENTER);
 stroke("red");
 fill("pink");
 image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
// pop();
 }
}