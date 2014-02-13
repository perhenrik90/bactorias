/******************************
 * Model for player
 *
 * @author Per-Henrik Kvalnes
 ******************************/
function createPlayerModel()
{
	var obj = new Object();

	obj.xpos = 0;
	obj.ypos = 0;
	obj.imgsrc = "img/bakterie.png";


	/** set functions **/
	obj.setX = function(x)
	{
		this.xpos = x;
		if(this.onDraw){this.onDraw();}
	}	
	
	obj.setY = function(y)
	{
		this.ypos = y;
		if(this.onDraw){this.onDraw();}
	}	

	obj.setXY = function(x,y)
	{
		this.xpos = x;
		this.ypos = y;
		if(this.onDraw){this.onDraw();}
	}
	return obj;
}
