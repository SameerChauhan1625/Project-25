class Paper {

    constructor(x,y,r){

        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.box = Bodies.rectangle(x,y,options);
        Matter.Bodies.circle(this.box,r);
        World.add(world,this.box);
    }

    display(){
        Push();
        fill("blue");
        Pop();
        
    }
}