/**
 * Give a unique id below. You can use whatever random identifier you like.
 * A UUID generator at http://vorple-if.com/uuid/ creates valid IFIDs.
 */

undum.game.id = "19dbbca3-6ceb-43ed-a7e8-87f4ce21b997";
undum.game.version = "1.0";
undum.game.start = "start";


/**
 * Uncomment the following line during developing 
 * and comment it out again when releasing.
 */

// vorple.core.debug = true;


/**
 * Uncomment the following line if you want to show
 * a confirmation message when the reader is leaving the page. 
 */

// vorple.core.settings.confirmWindowClose = true;


/**
 * If you use undum.game.afterEnter or undum.game.afterAction 
 * global event functions, it's important to include Vorple's
 * event triggers as shown below!
 */


undum.game.afterEnter = function( character, system, from, to ) {
    vorple.undum.afterEnterTrigger( character, system, from, to );
	//resizeElements();

     // other content here
};

undum.game.afterAction = function( character, system, situation, action ) {
    vorple.undum.afterActionTrigger( character, system, situation, action );
	//resizeElements();
    // other content here
};

var destination ="";

/**
 * initialization.
 */

var winW1 = 0;

var winH1 = 0;

var initializedBool = false;

var canvasWidth = 500;
	 
function resizeElements(){	
        var menuWidth = $( window ).width();
		
		console.log(menuWidth);
		
		if (menuWidth < 560){
			$("#tallyman").hide();
			$("#scribe").hide();
			
			$("#menu").css('font-size','11px');
			$("#menu").css('line-height', '1.1em');
			
			$(".answertext").css('width', '16em');
			$(".answertext").css('height', '40px');
		} else {
			$("#tallyman").show();
			$("#scribe").show();
			
			$("#menu").css('font-size','16px');
			$("#menu").css('line-height', '2.0em');
			
			$(".answertext").css('width', '30em');
			$(".answertext").css('height', '20px');
		}

		var tabTag = document.getElementById("content_wrapper");
		var tabWidth = tabTag.offsetWidth; 
                
		winW1 = tabWidth - 80;
				
		if (winW1 < 0){
			winW1 = 0;
		}
				
		winH1 = winW1 * .5625;
				
		if ($("#videos")) {
			$(".videoiFrame").width(winW1);
			$(".videoiFrame").height(winH1);
		}
				
		//adjust width for 2D canvas drawing surface

		var panelTag = document.getElementById("content");
		var panelWidth = panelTag.offsetWidth;
				
		canvasWidth = panelWidth;// - 40;

		if (canvasWidth > 500 ) {
			canvasWidth = 500;
		}

		if (canvas){
			$(".graphpaper").width(canvasWidth);
			$(".graphpaper").height(canvasWidth);
		}
		
}

function scrollToTop(){
	$("body, html").animate({scrollTop: 0}, 500);
}


function scrollToInsert(targetClass){
	var winW = 300, winH = 400;
	if (document.body && document.body.offsetWidth) {
 		winW = document.body.offsetWidth;
 		winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
    	document.documentElement &&
    	document.documentElement.offsetWidth ) {
		winW = document.documentElement.offsetWidth;
 		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
 		winW = window.innerWidth;
 		winH = window.innerHeight;
	}

		//var p = $( "#content" ).height();
		var p = $(targetClass).last();
		//var elem = $( ".insert" ).last();
		var newh = p.position().top;
		var scrollPoint = newh - (winH - 152);//($(window).height() - 52);
		//alert (winH + " " + p + " " + scrollPoint);
		$("body, html").animate({scrollTop: scrollPoint}, 500);
}

function hideMenu(){
	$('#info_panel').hide();
	$('#character_panel').hide();
	$('#content_wrapper').show();
}

function showCalc(){
	$('#character_panel').hide();
	$().closeMenu();
	$('#content_wrapper').show();
	$('#info_panel').show();
}

function hideStats(){
	$('#character_panel').hide();
	$('#content_wrapper').show();
}

function showStats(){
	$('#info_panel').hide();
	$('#content_wrapper').hide();
	$().closeMenu();
	$('#character_panel').show();
	//$('#content_wrapper').hide();
}

function setProgress(system, pArray){
	var percent = pArray[0]/pArray[1];
	system.setQuality('usrprogress', percent*100);
}

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
	//animateQuality(qualityId, newValue, options);
	
	usrprogress: new undum.IntegerQuality(
        "Progress", {group:'levelprogress'}
    ),
    beginnerbadge: new undum.OnOffQuality(
        "Orientation", {priority:"0001", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    apprenticebadge: new undum.OnOffQuality(
        "Apprentice", {priority:"0002", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    journeymanbadge: new undum.OnOffQuality(
        "Journeyman", {priority:"0003", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    sailorbadge: new undum.OnOffQuality(
        "Sailor", {priority:"0004", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    investorbadge: new undum.OnOffQuality(
        "Investor", {priority:"0005", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    alchemistbadge: new undum.OnOffQuality(
        "Alchemist", {priority:"0006", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    engineerbadge: new undum.OnOffQuality(
        "Engineer", {priority:"0007", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    tradesmanbadge: new undum.OnOffQuality(
        "Tradesman", {priority:"0008", group:'levelbadges', onDisplay:"&#10003;"}
    ),
    masterbadge: new undum.OnOffQuality(
        "Master", {priority:"0009", group:'levelbadges', onDisplay:"&#10003;"}
    ),
	//merit disguisesbadge
    linkingbadge: new undum.OnOffQuality(
        "Linking", {group:'skillbadges', onDisplay:"&#10003;"}
    ),
    menubadge: new undum.OnOffQuality(
        "Storyteller", {group:'skillbadges', onDisplay:"&#10003;"}
    ),
    oraclebadge: new undum.OnOffQuality(
        "Scribe", {group:'skillbadges', onDisplay:"&#10003;"}
    ),
    explorerbadge: new undum.OnOffQuality(
        "Explorer", {group:'skillbadges', onDisplay:"&#10003;"}
    ),
    disguisesbadge: new undum.OnOffQuality(
        "Disguises", {group:'skillbadges', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    levelbadges: new undum.QualityGroup('Level Badges', {priority:"0001"}),
	levelprogress: new undum.QualityGroup('Level Progress', {priority:"0002"}),
	skillbadges: new undum.QualityGroup('Skill Badges', {priority:"0003"})
};

		
undum.game.init = function( character, system ) {
    // remember to keep the initialization line inside undum.game.init. 
	
	document.addEventListener('touch', function(event){
	//window.addEventListener('touch', function(event){
		var targ;
		var e = event;
		if (!e){ var e = window.event;}
		if (e.target) {targ = e.target;}
		else if (e.srcElement) {targ = e.srcElement;}
		
		if (targ.id=="mid_panel" || targ.id=="title" || targ.id=="webapp" || targ.id=="legal" || targ.toString()=="[object HTMLHtmlElement]" ){
			//alert("" + targ.toString() + targ.id);
			
			event.preventDefault();
			event.stopPropagation();
		}
		
	}, false);
	
	document.addEventListener('touchmove', function(event){
	//window.addEventListener('touch', function(event){
		var targ;
		var e = event;
		if (!e){ var e = window.event;}
		if (e.target) {targ = e.target;}
		else if (e.srcElement) {targ = e.srcElement;}
		
		if (targ.id=="mid_panel" || targ.id=="title" || targ.id=="webapp" || targ.id=="legal" || targ.toString()=="[object HTMLHtmlElement]" ){
			//alert("" + targ.toString() + targ.id);
			
			event.preventDefault();
			event.stopPropagation();
		}
		
	}, false);
	 
    vorple.core.init( system );
	resizeElements();
	
	//initialize qualities - character.sandbox.
	//current points, max points
	character.sandbox.beginningskillpoint = [0, 1];
	character.sandbox.apprenticeskillpoint = [0, 1];
	character.sandbox.journeymanskillpoint = [0, 1];
	character.sandbox.sailorskillpoint = [0, 1];
	character.sandbox.investorskillpoint = [0, 1];
	character.sandbox.alchemistskillpoint = [0, 1];
	character.sandbox.engineerskillpoint = [0, 1];
	character.sandbox.tradesmanskillpoint = [0, 1];
	character.sandbox.masterskillpoint = [0, 1];
	
	system.setQuality('usrprogress', 0);
	
	system.setQuality('beginnerbadge', 0);
	system.setQuality('apprenticebadge', 0);
	system.setQuality('journeymanbadge', 0);
	system.setQuality('sailorbadge', 0);
	system.setQuality('investorbadge', 0);
	system.setQuality('alchemistbadge', 0);
	system.setQuality('engineerbadge', 0);
	system.setQuality('tradesmanbadge', 0);
	system.setQuality('masterbadge', 0);
	
	system.setQuality('menubadge', 0);
	system.setQuality('oraclebadge', 0);
	system.setQuality('linkingbadge', 0);
	system.setQuality('disguisesbadge', 0);
	
};

$( window ).resize(function() {
	resizeElements();
  //$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
});

//window.onresize = resizeElements();