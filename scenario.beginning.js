// JavaScript Document
var menuFirstTime = true;
var oracleFirstTime = true;

function theBeginning(){
	//vorple.notify.show( 'Welcome to The Quad!', { layout: 'topCenter'} );
	vorple.undum.doLink('start');
	postGoogleData('dimension1', 'start')
	return false;
}

function readSign(){
	vorple.notify.closeAll();
	$("#title").hide();
	vorple.core.system.setQuality('linkingbadge', 1);
	vorple.notify.show( 'You receive the <strong>Linking</strong> badge', { type:'success', layout: 'bottomCenter' } );
	postGoogleData('dimension5', '1')
	vorple.undum.doLink('readsign');
	return false;
}

function postGoogleData(dimension, dimVal){
	console.log('calling iframe google post');

	var el = document.getElementById('tracker');

	if(el.contentWindow)
	{
   		el.contentWindow.setGoogleVal(dimension, dimVal);
	}
		else if(el.contentDocument)
	{
   		el.contentDocument.setGoogleVal(dimension, dimVal);
	}
}

function menuBadge(){
	vorple.notify.closeAll();
	
	if (menuFirstTime){
		vorple.core.system.setQuality('menubadge', 1);
		menuFirstTime = false;
		vorple.notify.show( 'You receive the <strong>Storyteller</strong> badge', { type:'success', layout: 'bottomCenter' } );
		postGoogleData('dimension3', '1')
	}
	
	return false;
}

function oracleBadge(){
	vorple.notify.closeAll();
	showCalc();
	
	if (oracleFirstTime){
		vorple.core.system.setQuality('oraclebadge', 1);
		oracleFirstTime = false;
		vorple.notify.show( 'You receive the <strong>Scribe</strong> badge', { type:'success', layout: 'bottomCenter' } );
		playSong();
	}

	postGoogleData('dimension2', '1')

	return false;
}

function playSong(){
	vorple.media.playMusic({ 
                    mp3: 'thequadraticformulasong.mp3',
					oga: 'thequadraticformulasong.ogg'
                });
}

undum.game.situations.start = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){		
		character.sandbox.beginningskillpoint[1] = 2;
		
		destination = "Up ahead is a sign, any time you see a red link, click on it to learn more. <a href='#' onClick='readSign();'>Read the sign</a> to start your adventure.";
		system.clearContent();
		
		playSong();
				
		system.write("<div><h1>The Adventure Begins</h1>\
		\
		<p>Welcome to the Quad, where the quadratic function and the quadratic equation become more than just symbols on a page, they become tools to help you succeed at solving everyday problems. This is a journey of many roles and many levels. Open your mind to the possibilities and use the Quad to help you find your way.</p><br/><p class='transient'>" + destination + "</p></div>"
		);
		
		scrollToTop();

		}
	}
);

undum.game.situations.readsign = new undum.Situation({
	enter:function(character, system, from){
		$("#title").hide(0);
		
		destination = "<div class='transient'><a href='#' onClick='theApprentice();'>Begin your Apprenticeship</a>.</div>";
		
		character.sandbox.beginningskillpoint[0] = 1;
		setProgress(system, character.sandbox.beginningskillpoint);
		
		system.write("<div class='insert'><h1>The Sign</h1>\
		\
		<p>You look closely at the sign. In an ancient script you read, 'Traveling in the Quad is easy. Simply make choices during each scenario to advance through the level.'</p><br/>\
		\
		<div>A set of red buttons in the upper right corner catches your eye. In small letters you see:\
		\
		<ol><li>The Scribe - a calculator to assist your understanding of how the equation works</li>\
		\
		<li>The Tallyman - keeps track of your progress, skills and levels throughout your adventure</li>\
		\
		<li>The Storyteller - stories of quadratic equation adventures where you can solve challenges and achieve new levels</li></ol>\
		\
		<div> If this is your first visit to the Quad, use the red links like the one below to show you the way to master the Quad.</div>\
		\
		<br /></div>" + destination + "</div>");
		
		scrollToInsert('.insert');
	}
});
