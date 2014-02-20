/*****************************
 * WORLD MODEL
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

function createRandomWorld(length, xLast, yLast)
{
	worldArray = [];
	for(i = 0; i < worldLength; i++)
	{
		/** create topwall **/
		topWall = parseInt(Math.random()*5);
		topWall = Math.abs(topWall);
		
		for(x = topWall; x >= 0; x--)
		{
			w = createWall(i, x);
			worldArray.push(w);
		}

		bottomWall = parseInt(Math.random()*5);
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


function createBumbyWorld(length, xLast, yLast)
{
	worldArray = [];
	for(i = 0; i < worldLength; i++)
	{
		/** create topwall **/
		topWall = parseInt(Math.random()*5);
		topWall = Math.abs(topWall);
		
		for(x = topWall; x >= 0; x--)
		{
			w = createWall(i, x);
			worldArray.push(w);
		}

		bottomWall = parseInt(Math.random()*5);
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

//
// MAIN WORLD FUNCTION
//

/** create a list of world elements **/

function createWorld()
{
	worldArray = [];
	worldLength = 512;

	// define the viewport of the model
	yLast	= 12;
	xLast	= 32;
	

	worldArray = createRandomWorld(worldLength, xLast, yLast);
	
	return worldArray;
}
