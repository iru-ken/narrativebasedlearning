// JavaScript Document

function theTradesman(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('tradesmanbadge', 1);
	vorple.notify.show( 'Congratulations, you have acheived the level of <strong>Tradesman!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('tradesman');
	postGoogleData('dimension1', 'Tradesman');
	return false;
}

undum.game.situations.tradesman = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p class='transient'>Make sure you've carried out the actions above, then <a href='#' onClick='theEngineer();'>advance to the role of Engineer</a>.<br/></p>";
		system.clearContent();
		system.write("<div id='tradesman'><h1>The Tradesman</h1>\
		 \
		<p>You own a widget factory that has daily production costs of <br/><br/><center><h2>C(x) = 800 - 8x + 0.25x<sup>2</sup></h2></center><br/><br/>where C is the total cost (in dollars) and x is the number of units produced.<br/>\
		\How many units should be produced every day to yield a minimum cost?\
		\
		Your company’s weekly revenue in dollars is given by R(x)=2000x-2x<sup>2</sup>, where x is the number of items produced during a week. <br/>\
		\
		<blockquote>What amount of items will produce the maximum revenue?</blockquote></p>\
		\
		<p><a href='./tradesman01'>(a sequence of decisions to solve the problem go here)</a><br/><br/></p>" + destination + "</div>");
		
		scrollToTop();
		},
		act: function( character, system, action ) {
        	if( action == 'tradesman01' ) {
            	//stuffToDo();
        	}
    	}
	}
);
