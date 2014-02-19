/********************************
 * Canvas View
 *
 * @author Per-Henrik Kvalnes
 ********************************/
updateRate = 40;
blockWidth = 32;
blockHeight = 32;

function gameCanvas( canvas )
{
	// get context
	ctx = canvas.getContext("2d");

	// init view variables
	viewposx = 100;
	viewposy = 0;

	// create models
	player = createPlayerModel();
	player.setX(250);
	player.setY(10);

	world = createWorld();
	
	/** called from models when updated **/
	function onDraw()
	{
		ctx.clearRect( 0, 0, canvas.width, canvas.height);

		x = player.xpos - viewposx;
		y = player.ypos - viewposy;
		i = player.imgid;

		//
		// DRAW PLAYER
		//
		img = new Image();
		img.src = "img/bakterie.png";
	
		ctx.drawImage(img, x, y);
 
		// 
		// DRAW WORLD
		//
		imgWall = new Image();
		imgWall.src = "img/wall.png";


		/** go though the wall list **/
		for(i = 0; i < world.length; i ++)
		{
			wall 	= world[i];
			x1	= (wall.xpos*blockWidth)-viewposx;
			y1	= (wall.ypos*blockWidth)-viewposy;
		
			x2	= blockWidth;
			y2	= blockHeight;

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

	/** push the player upwards when canvas clicked **/
	canvas.onclick = function(e)
	{
		player.pushForce();
	}

	//
	// SET FUNCTIONS
	//

	/** set the view position **/
	function setViewX(x)
	{
		viewposx = x;
		this.onDraw();
	}
	function setViewY(y)
	{
		viewposx = y;
		this.onDraw();

	}	
			
}
