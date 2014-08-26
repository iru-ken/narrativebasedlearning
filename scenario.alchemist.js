// JavaScript Document

function theAlchemist(){
	$("#title").hide(0);
	vorple.core.system.setQuality('alchemistbadge', 1);
	vorple.notify.show( 'Congratulations, you have achieved the level of <strong>Alchemist!/strong>', { type:'information', layout: 'topCenter' } );
	vorple.undum.doLink('alchemist');
	postGoogleData('dimension1', 'Alchemist');
	return false;
}

undum.game.situations.alchemist = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p class='transient'>Make sure you've carried out the actions above, then <a href='#' onClick='theTradesman();'>advance to the role of Tradesman</a>.<br/></p>";
		system.clearContent();
		system.write("<div id='alchemist'><h1>The Alchemist</h1>\
		 \
		<p>The number of bacteria in a refrigerated food is given by <br/><br/><center><h2>N(t) = 20t<sup>2</sup> - 20t + 120</h2></center><br/><br/> for -2 <= t <= 14 and where t is the temperature of the food in Celsius. <br/>\
		\
		<blockquote>At what temperature will the number of bacteria be minimal?</blockquote></p>\
		\
		<p><a href='./alchemist01'>(a sequence of decisions to solve the problem go here)</a><br/><br/></p>" + destination + "</div>");
		
		scrollToTop();
		
		},
		act: function( character, system, action ) {
        	if( action == 'alchemist01' ) {
            	//stuffToDo();
        	}
    	}
	}
);