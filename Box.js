class Box{
    constructor(x,y,width,height) {
        var options={

     'resituition': 0.3,
     'friction' :1,
     'density':2
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
  push ();
  translate (pos.x,pos.y);
  rotate (angle);
  rectMode(center);
  strokeWeight(3);
  stroke ("red");
  fill ("white");
  rect(0,0, this.width,this.height);
  pop ();
}
}