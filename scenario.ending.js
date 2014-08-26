// JavaScript Document

function theEnd(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.notify.show( 'Congratulations, you are now ready to move beyond the Quad!', { type:'information', layout: 'topCenter' } );
	vorple.undum.doLink('conclusion');
	return false;
}

undum.game.situations.conclusion = new undum.Situation({
	enter:function(character, system, from){
		destination = "";
		system.clearContent();
		system.write("<div id='conclusion'><h1>Your Next Adventure Awaits</h1>\
		 \
		<p>You have reached the end of this adventure. The rest is up to you. Tally-ho!</p>\
		\
		<br/><p><a href='#' onClick='theBeginning();'>Play the game again from the beginning.</a></p></div>");
		
		scrollToTop();
		},
		act: function( character, system, action ) {
        	if( action == 'conclusion01' ) {
            	//noting
        	}
    	}
	}
);
