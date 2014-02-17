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
		ctx.fillRect(x,y,100,100);
	}


	function updateForce()
	{
		player.updateForce();
	}
	setInterval(updateForce, updateRate);
	player.onDraw = onDraw;
	onDraw();	

	//
	// CONTROLLER CODE
	//
	canvas.onclick = function(e)
	{
		player.pushForce();
	}
}
