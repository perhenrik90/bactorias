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

/*************************************
 * Create a boring random world model
 *
 *************************************/
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


/******************************
 * Create a bumby world model *
 *
 *******************************/
function createBumbyWorld(length, xLast, yLast)
{
	worldArray = [];
	lastTop = 0;
	lastBottom = 0; 
	head	 = 8;

	/** create some big space at the "head" first blocks **/
	for( i = 0; i < head; i++)
	{
		w = createWall(i,0);
		worldArray.push(w);

		w = createWall(i,yLast-1);
		worldArray.push(w);
	}


	for(i = head; i < worldLength; i++)
	{
		/** create topwall **/
		topWall = parseInt(Math.random()*3);
		
		if(lastTop+topWall < yLast/2)
		{
			topWall = lastTop + topWall;
		}
		else
		{
			topWall = lastTop - topWall;
		}
		lastTop = topWall;

		for(x = topWall; x >= 0; x--)
		{
			w = createWall(i, x);
			worldArray.push(w);
		}

		// build bottom wall
		bottomWall = yLast/2-1;
		bottomWall = bottomWall + topWall;
		/*
		bottomWall = bottomWall -parseInt(Math.random()*4);
		bottomWall = Math.abs(bottomWall);
		bottomWall = yLast-bottomWall;
		*/	

		for(x = bottomWall; x <= yLast; x++)
		{
			w = createWall(i, x);
			worldArray.push(w);
		}
	}

	return worldArray;
}

//////////////////////////////////////////
// MAIN WORLD FUNCTION			//
//					//
// main entrypoint for all world	//	 
//  algorithems				//
//					//
//////////////////////////////////////////

/** create a list of world elements **/

function createWorld()
{
	worldArray = [];
	worldLength = 512;

	// define the viewport of the model
	yLast	= 12;
	xLast	= 32;
	
	worldArray = createBumbyWorld(worldLength, xLast, yLast);
	
	return worldArray;
}
