/******************************
 * Model for player
 *
 * @author Per-Henrik Kvalnes
 ******************************/
function createPlayerModel()
{
	var obj = new Object();

	obj.xpos   	= 0;
	obj.ypos   	= 0;
	obj.yforce 	= 0;
	obj.yforcemax	= 4;
	obj.xforce	= 3;
	obj.type	= "player"
	obj.imgid = "playerbact";


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

	// update the normal force
	obj.updateForce = function()
	{
		y = parseInt(this.yforce);
		if(obj.yforce <= this.yforcemax)
		{
			obj.yforce += 0.2;
		}
		obj.ypos += obj.yforce;
		obj.xpos += obj.xforce;
		if(this.onDraw){this.onDraw();}
	}	
	
	// push the player upwards
	obj.pushForce = function()
	{
		yforce = parseInt( this.yforce);
		if(yforce > -this.yforcemax)
		{
			obj.yforce -= 4;
		}
	}

	return obj;
}
