// JavaScript Document

function theMaster(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('masterbadge', 1);
	vorple.notify.show( 'Congratulations, you have achieved the level of <strong>Master!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('master');
	postGoogleData('dimension1', 'Master');
	return false;
}

undum.game.situations.master = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p class='transient'>Make sure you've carried out the actions above, then <a href='#' onClick='theEnd();'>advance to the end of your training</a>.<br/></p>";
		system.clearContent();
		system.write("<div id='master'><h1>The Master</h1>\
		 \
		<p>You are a pig farmer in North Carolina. You have a pig that presently weighs 200 pounds. You could sell it now for a price of $1.40 a pound. The pig is gaining 10 pounds a week while the price per pound of pork is dropping 2 cents a week.<br/>\
		\
		<blockquote>When should you sell the pig to get the maximum amount of money for it? <br/>\
		\
		If you pay $5 per week for food for the pig, when should you sell the pig to get the maximum profit?</blockquote></p>\
		\
		<p><a href='./master01'>(a sequence of decisions to solve the problem go here)</a><br/><br/></p>" + destination + "</div>");
		
		scrollToTop();
		},
		act: function( character, system, action ) {
        	if( action == 'master01' ) {
            	//stuffToDo();
        	}
    	}
	}
);