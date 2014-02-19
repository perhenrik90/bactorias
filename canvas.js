/********************************
 * Canvas View
 *
 * @author Per-Henrik Kvalnes
 ********************************/
updateRate = 40;
blockWidth = 32;

function gameCanvas( canvas )
{
	// get context 
	ctx = canvas.getContext("2d");
	player = createPlayerModel();
	player.setX(250);
	player.setY(10);

	world = createWorld();
	
	/** called from models when updated **/
	function onDraw()
	{
		ctx.clearRect( 0, 0, canvas.width, canvas.height);

		x = player.xpos;
		y = player.ypos;
		i = player.imgid;

		img = new Image();
		img.src = "img/bakterie.png";
	
		ctx.drawImage(img, x, y);
 
		/** draw world **/
		imgWall = new Image();
		imgWall.src = "img/wall.png";

		for(i = 0; i < world.length; i ++)
		{
			wall 	= world[i];
			x1	= wall.xpos*blockWidth;
			y1	= wall.ypos*blockWidth;
		
			x2	= x1 + blockWidth;
			y2	= y1 + blockWidth;

			console.log("X1: "+ x1 + " X2: "+x2);
			ctx.drawImage(imgWall, x1, y1, x2, y2);
		}
	}


	function updateForce()
	{
		player.updateForce();
	}
	setInterval(updateForce, updateRate);
	player.onDraw = onDraw;
	onDraw();	

	function initBitmaps()
	{
	}
	initBitmaps();

	//
	// CONTROLLER CODE
	//
	canvas.onclick = function(e)
	{
		player.pushForce();
	}
}
