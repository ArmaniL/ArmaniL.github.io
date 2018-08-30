var canvas;

var cells=[];
var amount=20;
function setup(){

	canvas=createCanvas(displayWidth,30);
	canvas.parent('Blood')
	for (var n=0;n<amount;n++){
		cells.push(new cell());
	}
}
function draw(){
background(255,153,152)
fill(215,65,74)
rect(0,0,displayWidth,5)
rect(0,height-5,displayWidth,5)
cells.forEach(function(element){
	element.update();
	element.draw();
})

}


function cell(){
    this.x= random(-100,displayWidth);
    this.y=random(6,height-6);
    this.speed=random(3);
	this.draw= function(){
		fill(243, 4, 0)
		ellipse(this.x,this.y,5);
	}

    this.update= function(){
           
    	if (this.x>displayWidth){
          this.x=0;
          this.speed=random(3);
          this.y=random(6,height-6)
    	}
    
        else{
        	this.x+=this.speed;
        }


    }

}