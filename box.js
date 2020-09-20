class Box{
contructor(x,y,width,height){

    this.body=Bodies.rectangle(x,y,width,height)
    this.width=wwidth
    this.height=height

    World.add(world,this.body)
}
display(){
var pos=this.body.position

rect(pos.x,pos.y,this.width,this.height)
 

}
}