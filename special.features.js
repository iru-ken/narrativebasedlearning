// JavaScript Document

function graphpaper(af, bf, cf, zoomx, zoomy, ig){
	//scribeGraph(ax, bx, cx);
	percentagea = af;
    percentageb = bf; 
    percentagec = cf;
	dx = zoomx;
	dy = zoomy;
	interactiveGraph = ig;
  
	vorple.undum.doLink('graph');
	
	return false;
}

undum.game.situations.graph = new undum.Situation({
	enter:function(character, system, from){

		$( "#graph" ).remove();
		closeGraph();
		
		system.write("<p class='transient'>\
				\
				<center><canvas id='canvas2' class='graphpaper' width='500' height='500' style='border:solid 1px #0000ff'>\
				\
				</canvas></center><br/><br/>" + destination);
				
		initGraph();
		resizeElements();
		}
	}
);

function interactiveGraphInstructions (){
	var str = "<p>\
		\
		<strong>Observe how the parabola changes as you modify the coeffiecients.</strong>\
		\
		</p>\
		\
		<p>Press(Click) and drag along right side of graph to change coefficient C.</p>\
		\
		<p>Press(Click) and drag along the bottom of the graph to change coefficient B.</p>\
		\
		<p>Press(Click) and drag left/right in graph to change coefficient A.</p>\
		\
		<p><em>Press(Click) the top left corner to zoom out. Press(Click) the top right corner to zoom in.</em></p>\
		\
		</center></p><br />"
		
	return str;
}
