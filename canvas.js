/********************************
 * Canvas View
 *
 * @author Per-Henrik Kvalnes
 ********************************/
updateRate = 100;

function gameCanvas( canvas )
{
	// get context 
	ctx = canvas.getContext("2d");
	player = createPlayerModel();
	player.setX(250);
	player.setY(10);
	
	/** called from models when updated **/
	function onDraw()
	{
		ctx.clearRect( 0, 0, canvas.width, canvas.height);

		x = player.xpos;
		y = player.ypos;
		i = player.imgid;

		img = document.getElementById(i);
	
		ctx.drawImage(img, x, y);
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
		img = document.createElement("img");
		img.id = "playerbact";		
		img.src = "img/bakterie.png";
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
