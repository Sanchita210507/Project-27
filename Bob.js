class Bob{

    constructor(x, y, diameter,radius, options){
        
    
        var options = {
    
            isStatic: false, 
            'restitution': 1,
            'friction': 1,
            'density': 6
                
             }

             this.width = width; 
             this.height = height;
             this.radius = radius;
             this.radius = diameter/2;
            this.body = Bodies.circle(x, y, this.radius, options);
           
          
        
           
           
         World.add(world, this.body); 
   
    }
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();

   translate(pos.x, pos.y);

   

        ellipseMode(RADIUS);
      fill(100)
       ellipse(0, 0,this.radius, this.radius);
       
    pop();
    
    }
    }