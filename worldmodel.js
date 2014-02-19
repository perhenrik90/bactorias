/*****************************
 * WALL MODEL
 * 
 * @author Per-Henrik Kvalnes
 *
 ******************************/
function createWall(xpos, ypos)
{
	obj 		= new Object();
	obj.xpos 	= xpos;
	obj.ypos 	= ypos;
	obj.type	= "wall";

	return obj;
}


function createWorld()
{
	worldArray = [];
	worldLength = 32;
	yLast	= 12;
	

	for(i = 0; i < worldLength; i++)
	{
		/** create topwall **/
		topWall = parseInt(Math.random()*3);
		topWall = Math.abs(topWall);
		
		for(x = topWall; x >= 0; x--)
		{
			w = createWall(i, x);
			worldArray.push(w);
		}

		bottomWall = parseInt(Math.random()*3);
		bottomWall = Math.abs(topWall);
		bottomWall = yLast-bottomWall;
		
		for(x = bottomWall; x <= yLast; x++)
		{
			w = createWall(i, x);
			worldArray.push(w);
		}
	}


	return worldArray;
}
