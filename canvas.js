
function gameCanvas( canvas )
{
	// get context 
	ctx = canvas.getContext("2d");
	
	function onDraw()
	{
		ctx.fillRect(40,40,100,100);
	}
	onDraw();	
}
