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
	world = [];

	for(i = 0; i < 10; i++)
	{
		w = createWall(i, 0);
		world.push(w);
	}
	world.push( createWall(1,2));

	world.push( createWall(4,2));

	return world;
}
