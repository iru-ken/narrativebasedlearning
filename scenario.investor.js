// JavaScript Document

function theInvestor(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('investorbadge', 1);
	vorple.notify.show( 'Congratulations, you have achieved the level of <strong>Investor!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('investor');
	postGoogleData('dimension1', 'Investor');
	return false;
}

function endInvest(){
	vorple.undum.doLink('vertexpoint');
}

undum.game.situations.investor = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		
		system.clearContent();
		system.write("<div id='investor'><h1>The Investor</h1>\
		 \
		<p>At the door to the Village Stock Market, you dust off your boots as the proprietor eyes you carefully. You hold of your new found wealth up for him to see. Reaching over the counter, he takes the bag across and places it on the brass scale setting on the tiles. Carfeully adding counterweights to the bowl opposite the one in which your sack rests. At equilibrium, the broker quickly writes a set of symbols on a scrap of parchment, hands it to you and bids you well.</p>\
		\
		<p>You look carefully at the markings on the paper,</p><br/>\
		\
		<blockquote><center class = 'parchmenttext'>Investment</center><br/><br/>\
		\
		<center><font class='quill'>v(t) = 50 + 73t - 3t<sup>2</sup></font></center></blockquote><br/>\
		\
		<p>The value of your stock portfolio is given by this function, where v is the value of the portfolio in hundreds of dollars and t is the time your money is invested in months. Based on this information, determine how much money was in your bag.<br/><br/>\
		\
		To get you started consider this, at the beginning of your investment, how much time has transpired"
		+ vorple.html.link([
                        {
                            content: '50 months',
                            url: './in2'
                        },
                        {
                            content: '0 months',
                            url: './in1'
                        },
                        {
                            content: '73 months',
                            url: './in2'
                        },
                        {
                            content: '3 months',
                            url: './in2'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' ) 
				)
				+ "<br/><br/>"
			);
			
		scrollToTop();
		},
		
		act: function( character, system, action ) {
        	if( action == 'in1' ) {
				system.write("<p>That is correct, at the beginning of your invetment, no time has passed, so t = 0.</p><br/>");
            	vorple.undum.doLink('investment');
        	} else if( action == 'in2' ) {
				system.write("<p>Actually, at the beginning of your invetment, no time has passed, so t = 0.</p><br/>");
            	vorple.undum.doLink('investment');
        	}
    	}
	}
);

undum.game.situations.investment = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
	
		system.write("<div id='investor' class='insert'><h1>Seed Money</h1>\
		 \
		<p>You look back at the formula for your seed money and realize that if t = 0, then the value (v) in hundreds of dollars at time t = 0 is " 
		+ vorple.html.link([
                        {
                            content: '$5000',
                            url: './val1'
                        },
                        {
                            content: '$0',
                            url: './val2'
                        },
                        {
                            content: '$7300',
                            url: './val2'
                        },
                        {
                            content: '$300',
                            url: './val2'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( "external_link.png" )  + '</p>'
				)
				+ "<br/><br/>"
			);
	
		scrollToInsert('.insert');
		},
		act: function( character, system, action ) {
        	if( action == 'val1' ) {
            	system.write("<p>That is correct, when t = 0 and is multiplied by the coefficients a and b, only the constant remains (which just so happens to be the amount of your original investment in hundreds of dollars: 50 * $100 = $5000).</p><br/>");
            	vorple.undum.doLink('maxinvestment');
        	} else if( action == 'val2' ) {
            	system.write("<p>Actually, when t = 0 and is multiplied by the coefficients a and b, only the constant remains (which just so happens to be the amount of your original investment in hundreds of dollars: 50 * $100 = $5000).</p><br/>");
            	vorple.undum.doLink('maxinvestment');
        	}
    	}
	}
);

undum.game.situations.maxinvestment = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p>The curve opens down making it easy to see when you should sell to maximize your return. In the investment world, however, you need to be as exact as possible. This is where our quadratic equation come into play. Check with the scribe to determine the roots of this function. Once you calculate the roots (or x-intercepts), determining the maximum vertex is easy. Simply subtract the first root from the second and divide the difference by 2. This is the time (t) of maximum value (v).<br /><br /><a href='#' onClick = 'endInvest();'>Now, calculate v using the vertex point for t.</a></p>";
		
		system.write("<h1 class='insert'>Maximizing Your Investment</h1>\
		 \
		<p>Now that you know how much money you started with, you can calculate the maximum return on your investment. When you hit maximum, you should cash out and look for other ways to increase your wealth. You quickly sketch out the graph of this function to get a rough idea of what this investment function looks like.</p><br />");
		
		setCalcData(-3.0, 73.0, 50.0);
		graphpaper(-3.0, 73.0, 50.0, 200, 3200, false);
			
			scrollToInsert('.insert');
		},
		act: function( character, system, action ) {
        	//nothing
    	}
	}
);

undum.game.situations.vertexpoint = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
	
            	system.write("<div class='insert'><br /><br />The Scribe calculates the roots are equal to -0.67 and 25 with a vertex point of 12.17. The maximum value of your investment at that time will be" 
				+ vorple.html.link([
                        {
                            content: '$73,000',
                            url: './max2'
                        },
                        {
                            content: '$49,480',
                            url: './max1'
                        },
                        {
                            content: '$3000',
                            url: './max2'
                        }
                    ],
                    '<strong>________________? </strong></div>' 
					)
					+ "<br/><br/>"
				);
			scrollToInsert('.insert');
		},	
			act: function( character, system, action ) {
            	
        	if( action == 'max1' ) {
            	system.write("<p>Yes, in 12.17 months your investment maximizes at $49,480. So you have a little over a year to kill time waiting on your return. There must be something to do to pass the time. Taking to the street outside, you see an interesting shop next door with a symbol carved in the heavy wood<br/><br/>");
				
				system.write("<p><center>" + vorple.media.image('cannons.png') + "</center></p>");
				
				system.write("<div><a href='#' onClick='theEngineer();'>Ever curious, you advance through the doorway and enter the world of engineering</a>.<br/></div>");
		
            	
        	} else if( action == 'max2' ) {
            	system.write("<p>Actually, in 12.17 months your investment maximizes at $49,480. So you have a little over a year to kill time waiting on your return. There must be something to do to pass the time. Taking to the street outside, you see an interesting shop next door with a symbol carved in the heavy wood<br/><br/>");
				
				system.write("<p><center>" + vorple.media.image('cannons.png') + "</center></p>");
				
				system.write("<div><a href='#' onClick='theEngineer();'>Ever curious, you advance through the doorway and enter the world of engineering</a>.<br/></div>");
		
        	}
		}
	}
);