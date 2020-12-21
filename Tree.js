class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("Plucking_mangoes/tree.png")
        World.add(world,this.tree);
    }
display(){
    imageMode(CENTER);
    var pos1 = this.tree.position.x;
    var pos2 = this.tree.position.y;
    image(this.image,pos1,pos2);
}
}