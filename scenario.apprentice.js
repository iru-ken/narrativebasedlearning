// JavaScript Document
var v1 = false;
var v2 = false;
var v3 = false;
var v4 = false;

function theApprentice(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('apprenticebadge', 1);
	vorple.notify.show( 'Congratulations, you have achieved the level of <strong>Apprentice!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('apprentice');
	postGoogleData('dimension1', 'Apprentice')
	return false;
}

function theCave(){
	vorple.notify.closeAll();
	vorple.core.system.setQuality('explorerbadge', 1);
	vorple.notify.show( 'You receive the <strong>Explorer</strong> badge', { type:'success', layout: 'bottomCenter' } );
	vorple.undum.doLink('cave');
	postGoogleData('dimension4', '1')
	return false;
}

undum.game.situations.apprentice = new undum.Situation({
	enter:function(character, system, from){
		character.sandbox.apprenticeskillpoint[1] = 5;
		system.clearContent();
		destination = "<p class='transient'><a href='#' onClick='theCave();'>Enter the Parabolic Cavern.</a><br/></p>";
		system.write("<div id='apprentice'><h1>The Apprentice</h1>\
		\
		<p>Beyond the sign in the shadows of vines clinging to a rock outcropping, is darkness and mystery. It is the Parabolic cavern, where the secrets of Quadratic Equations are revealed. Listen as the tribal elder shares his knowledge as he scribes mathematical symbols on the stone walls of the great room.</p><br/>" + destination + "</div>"
		);
		
		scrollToTop();
	}
});

undum.game.situations.cave = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		character.sandbox.apprenticeskillpoint[0] = 1;
		setProgress(system, character.sandbox.apprenticeskillpoint);
		
		destination = "<p class='transient'>After you have learned all you can from the elder, <a href='#' onClick='theJourneyman();'>advance to the role of Journeyman</a>.<br/></p>";
		system.write("<div id='apprentice' class='insert'><h1>The Cavern</h1>\
		\
		<p>Brushing the vines aside, you enter a large cavern with four stone walls and a ceiling arcing high above you along a familiar curved shape. The elder, a weathered yet wise figure, welcomes you and says, 'Please select each topic from this list and I will reveal the mathematical mysteries of quadratics.'</p>\
		\
		<ol>\
		\
		<li><a href='./video1' classs='sticky'>Wall of Discovery</a> (video is black for first 40 seconds)</li>\
        \
        <li><a href='./video2' classs='sticky'>The Basics</a></li>\
        \
        <li><a href='./video3' classs='sticky'>Unreal Soulutions</a></li>\
		\
		<li><a href='./video4' classs='sticky'>Ballistics</a></li>\
		\
		</ol>\
		\
		<div><center><iframe id='videos' onload='resizeElements()' class='videoiFrame' width='" + winW1 + "' height='" + winH1 + "' src='media/black.html' frameborder='0' allowfullscreen></iframe></center></div>\
		\
		<br/>" + destination + "</div>");
		
		scrollToInsert('.insert');
	},
	act: function( character, system, action ) {
        if( action == 'video1' ) {
			if (!v1){
				character.sandbox.apprenticeskillpoint[0] = character.sandbox.apprenticeskillpoint[0] + 1;
				setProgress(system, character.sandbox.apprenticeskillpoint);
				v1 = true;
			}
		    
			vorple.notify.closeAll();
			vorple.notify.show( 'You receive the <strong>Discovery</strong> badge', { type:'success', layout: 'bottomCenter' } );
            document.getElementById('videos').src = 'http://www.youtube.com/embed/i7idZfS8t8w';
        }
        else if ( action == 'video2' ) {
			if (!v2){
				character.sandbox.apprenticeskillpoint[0] = character.sandbox.apprenticeskillpoint[0] + 1;
				setProgress(system, character.sandbox.apprenticeskillpoint);
				v2 = true;
			}
			vorple.notify.closeAll();
			vorple.notify.show( 'You receive the <strong>Basics</strong> badge', { type:'success', layout: 'bottomCenter' } );
            document.getElementById('videos').src = 'http://www.youtube.com/embed/iulx0z1lz8M';            
        }
		else if ( action == 'video3' ) {
			if (!v3){
				character.sandbox.apprenticeskillpoint[0] = character.sandbox.apprenticeskillpoint[0] + 1;
				setProgress(system, character.sandbox.apprenticeskillpoint);
				v3 = true;
			}
			vorple.notify.closeAll();
			vorple.notify.show( 'You receive the <strong>Unreal Solutions</strong> badge', { type:'success', layout: 'bottomCenter' } );
            document.getElementById('videos').src = 'http://www.youtube.com/embed/XUvKjC21fYU';            
        }
		else if ( action == 'video4' ) {
			if (!v4){
				character.sandbox.apprenticeskillpoint[0] = character.sandbox.apprenticeskillpoint[0] + 1;
				setProgress(system, character.sandbox.apprenticeskillpoint);
				v4 = true;
			}
			vorple.notify.closeAll();
			vorple.notify.show( 'You receive the <strong>Ballistics</strong> badge', { type:'success', layout: 'bottomCenter' } );
            document.getElementById('videos').src = 'http://www.youtube.com/embed/OZtqz_xw0SQ';            
        }
    }
	}
);