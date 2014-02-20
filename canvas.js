/********************************
 * Canvas View
 *
 * @author Per-Henrik Kvalnes
 ********************************/
updateRate = 40;
blockWidth = 64;
blockHeight = 64;
viewUpdateGap = 100;

function gameCanvas( canvas )
{
	running = true;

	xLast = 32;
	yLast = 12;

	blockWidth = canvas.width / 32;
	blockHeight = canvas.height /12;	
	// get context
	ctx = canvas.getContext("2d");

	// init view variables
	viewposx = 0;
	viewposy = 0;

	// create models
	player = createPlayerModel();
	player.setX(2);
	player.setY(200);

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
			y1	= (wall.ypos*blockHeight)-viewposy;
		
			x2	= blockWidth;
			y2	= blockHeight;

			if(x1 < canvas.width)
			{
				ctx.drawImage(imgWall, x1, y1, x2, y2);
				doCrash = checkCollition( wall.xpos, wall.ypos);
				if(doCrash){ running = false;}
			}

		}
		updateView();
	}

	function updateView()
	{
		xrelative = player.xpos - viewposx; 	
		if(xrelative > canvas.width/2)
		{
			viewposx += viewUpdateGap;
		}
	}

	function updateForce()
	{
		if(running)
		{
			player.updateForce();
		}
	}
	setInterval(updateForce, updateRate);
	player.onDraw = onDraw;
	onDraw();	

	function checkCollition( x, y )
	{
		var c = false;

		xoffset = player.xpos + 64;
		xoffset = parseInt(xoffset / blockWidth);
	
		yoffset = player.ypos + 64;
		yoffset = parseInt(yoffset / blockHeight);

		if( xoffset == x)
		{
			if( yoffset == y)
			{
				return true;
			}
		}
		return c;
	}

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
