class Box {
    constructor(x,y,width,height) {
      var options = {
          density: 1,
          restitution :1 ,
          friction: 1
        
      }
      this.image = loadImage("images/Monster-01.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop()
    }
  };
