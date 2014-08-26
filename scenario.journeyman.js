// JavaScript Document

var j1=false;
var j2=false;
var j3=false;
var j4=false;
var j5=false;
var j6=false;

function theJourneyman(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('journeymanbadge', 1);
	vorple.notify.show( 'Congratulations, you have achieved the level of <strong>Journeyman!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('journeyman');
	postGoogleData('dimension1', 'Journeyman');
	return false;
}

function theDisguise(){
	vorple.notify.closeAll();
	//vorple.core.system.setQuality('disguisesbadge', 1);
	//vorple.notify.show( 'You receive the <strong>Disguises</strong> badge', { type:'success', layout: 'bottomCenter' } );
	vorple.undum.doLink('disguises');
	return false;
}

function theJourneymanChallenge(){
	vorple.notify.closeAll();
	vorple.undum.doLink('journeymanchallenge');
	return false;
}


undum.game.situations.journeyman = new undum.Situation({
	enter:function(character, system, from){
		j1=0;
    	j2=0;
		j3=0;
		j4=0;
		j5=0;
		j6=0;

		character.sandbox.journeymanskillpoint[1] = 8;
		destination = "<div class='transient'><br/><center><a href='#' onClick='theDisguise();'>What did the elder say?</a><br/></center></div>";
		system.clearContent();
		
		system.write("<div id='journeyman'><h1>The Journeyman</h1>\
		 \
		<p>You emerge from the cavern into the warm rays of the mid-day sun, blinking as your eyes adjust from the darkness. Disoriented at first, you realize it was not a dream as the words of the elder echo in your head. You recall the cave drawings as he illustrated the mysteries of the quadratic equation. You recall him saying a quadratic equation is an equation of the form <strong>ax<sup>2</sup> + bx + c = 0</strong> that involves only two things besides numbers: <ol><li>a variable (ie. <strong>x</strong>)</li><li>a square of this variable (ie. <strong>x<sup>2</sup>)</strong></li></ol><blockquote>Examples: <ul><li>x<sup>2</sup> - x - 1 = 0</li><li>x<sup>2</sup> - 1 = 0</li><li>etc.</li></ul></blockquote> Usually, they are arranged so that the square of the variable part goes first, then the part with the variable, and some constant (or not, if the constant is 0), while the right side is equal to zero.</p><p>As an apprentice, you learned the power of quadratic functions as a passive observer. Your new level of journeyman brings you face-to-face with challenges to apply this knowledge and increase your own mathematical strengths.</p><p>One of the first challenges is recognizing quadratic equations in your daily experiences. Quadratic functions are not always obvious at first glance; they may appear as something else, something hidden and mysterious.</p>" + destination);
		
		scrollToTop();
	}
});
			
			
undum.game.situations.disguises = new undum.Situation({
	enter:function(character, system, from){
		character.sandbox.journeymanskillpoint[0] = 1;
		setProgress(system, character.sandbox.journeymanskillpoint);
		
		destination = "<p class='transient'><br /><br /><a href='#' onClick='theJourneymanChallenge();'>And now for your first challenge...</a></p>";
		
	system.write("<div  class='insert'></div><h1>Unmasking Quadratic Equations</h1>\
	\
	<p>Oh, yes! Sometimes these equations disguise themselves, making them easy to miss. You will need to be able to see through these disguises if you are to solve all of the challenges along your journey.</p>\
	\
	<br />\
	\
	<div><strong>Remember,</strong> a quadratic function in standard form is ax<sup>2</sup> + bx + c = 0.<br /><br /></div>\
	\
	<div>If you have an equation in some other form, for example x<sup>2</sup> = -2x + 3, convert it to standard form with the x<sup>2</sup> first, the x part second, and the number third.	In this case,<br/><br/><center>x<sup>2</sup> = -2x + 3<br />converts to<br />x<sup>2</sup> + 2x - 3 = 0.</center><br />\
	\
	<strong>Note:</strong> the signs of the coefficients change when moving from one side of the equation to the other.<br /><br /></div>\
		\
		<table border='1' cellspacing='0' cellpadding='0'>\
\
  <tr>\
\
    <td valign='top'><p align='center'><strong>In disguise</strong></p></td>\
\
    <td valign='top'><p align='center'>→ </p></td>\
\
    <td width='150' valign='top'><p align='center'><strong>In Standard Form</strong></p></td>\
\
    <td width='150' valign='top'><p align='center'><strong>a,b and c</strong></p></td>\
\
  </tr>\
\
  <tr>\
\
    <td width='150' valign='top'><p align='center'><strong>x<sup>2</sup> = 3x -1</strong></p></td>\
\
    <td valign='top'><p align='center'>Move all terms to left hand side</p></td>\
\
    <td valign='top'><p align='center'><strong>x<sup>2</sup> - 3x + 1 = 0</strong></p></td>\
\
    <td valign='top'><p align='center'>a=1, b=-3, c=1</p></td>\
\
  </tr>\
\
  <tr>\
\
    <td valign='top'><p align='center'><strong>2(w<sup>2</sup> - 2w) = 5</strong></p></td>\
\
    <td valign='top'><p align='center'>Expand (undo the brackets),<br />\
\
      and move 5 to left</p></td>\
\
    <td valign='top'><p align='center'><strong>2w<sup>2</sup> - 4w - 5 = 0</strong></p></td>\
\
    <td valign='top'><p align='center'>a=2, b=-4, c=-5</p></td>\
\
  </tr>\
\
  <tr>\
\
    <td valign='top'><p align='center'><strong>z(z-1) = 3</strong></p></td>\
\
    <td valign='top'><p align='center'>Expand, and move 3 to left</p></td>\
\
    <td valign='top'><p align='center'><strong>z<sup>2</sup> - z - 3 = 0</strong></p></td>\
\
    <td valign='top'><p align='center'>a=1, b=-1, c=-3</p></td>\
\
  </tr>\
\
  <tr>\
\
    <td valign='top'><p align='center'><strong>5 + 1/x - 1/x<sup>2</sup> = 0</strong></p></td>\
\
    <td valign='top'><p align='center'>Multiply by x<sup>2</sup></p></td>\
\
    <td valign='top'><p align='center'><strong>5x<sup>2</sup> + x - 1 = 0</strong></p></td>\
\
    <td valign='top'><p align='center'>a=5, b=1, c=-1</p></td>\
\
  </tr>\
\
</table>" + destination);

scrollToInsert('.insert');
	}
});
        	
			
undum.game.situations.journeymanchallenge = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		character.sandbox.journeymanskillpoint[0] = 2;
		setProgress(system, character.sandbox.journeymanskillpoint);
		
		destination = "<p class='transient'>As journeyman, you dabbled in solving basic quadratic functions. Now that you have a grasp of 'what' quadratic equations are and 'how' to solve them, it is time to focus on 'why.' For these functions are more than just mathematical problems, they are solutions for real challenges you will face on your journey. Is that a shoreline up ahead? Why yes it is. And there appears to be a small boat resting on the sand. Looks like it is time to learn how to be a sailor. <br /><br /><a href='#' onClick='theSailor();'>Row, row, row your boat...</a><br/></p>";
		
		system.write("<div  class='insert'></div><h1>The First Challenge</h1>\
		 \
		<div class='h4textsize'><center>Solve quadratic equation:<br />x<sup>2</sup> -5x - 6 = 0</center></div><br/>\
		\
		<div>Step 1: Calculate the discriminant<br/><center>d = b<sup>2</sup>-4ac</center></div>");
		
		system.write(
            vorple.html.tag('div',
			"Each coefficient above has a value you can find in the equation. Select a coefficient and choose its value from the pop-up list. After correctly identfying the coefficients, solve for d and choose its value.<br />"
				+ 
			vorple.html.tag('center',
                '<div class="h3textsize">'
				+ vorple.html.link([
                        {
                            content: '1',
                            url: './journeyman08'
                        },
                        {
                            content: '49',
                            url: './journeyman07'
                        }
						,
                        {
                            content: '-129',
                            url: './journeyman08'
                        }
						,
                        {
                            content: '6',
                            url: './journeyman08'
                        }
                    ],
                    'd'
                )
				+
				'= '
                + vorple.html.link([
                        {
                            content: '1',
                            url: './journeyman02'
                        },
                        {
                            content: '-5',
                            url: './journeyman01'
                        }
						,
                        {
                            content: '-6',
                            url: './journeyman02'
                        }
						,
                        {
                            content: '0',
                            url: './journeyman02'
                        }
                    ],
                    'b'
                )
				+ '<sup>2</sup> -4'
                + vorple.html.link([
                        {
                            content: '1',
                            url: './journeyman03'
                        },
                        {
                            content: '-5',
                            url: './journeyman04'
                        }
						,
                        {
                            content: '-6',
                            url: './journeyman04',
							classes: 'once'
                        }
						,
                        {
                            content: '0',
                            url: './journeyman04'
                        }
                    ],
                    'a'
                )
				+ vorple.html.link([
                        {
                            content: '1',
                            url: './journeyman06',
							classes: 'once'
                        },
                        {
                            content: '-5',
                            url: './journeyman06',
							classes: 'once'
                        }
						,
                        {
                            content: '-6',
                            url: './journeyman05',
							classes: 'once'
                        }
						,
                        {
                            content: '0',
                            url: './journeyman06',
							classes: 'once'
                        }
                    ],
                    'c'
                )
				+ "</div>"
            )
			)
        );
		scrollToInsert('.insert');
	},
	
	act: function( character, system, action ) {
        if( action == 'journeyman01' ) {
			if (!j1){
				character.sandbox.journeymanskillpoint[0] = character.sandbox.journeymanskillpoint[0]+1;
				setProgress(system, character.sandbox.journeymanskillpoint);
				j1 = true;
			}
			
			vorple.notify.closeAll();
            system.write("<p>That is correct, <font class='solutiontext'>b, or -5 in this case,</font> is the coefficient of the variable <font class='solutiontext'>x</font>.</p><br />");
			
				
		} else if ( action == 'journeyman02' ) {
				vorple.notify.closeAll();
				vorple.notify.show( "<p>Check with The Scribe for more details and try again.</p>", { type:'warning', layout: 'center' } );
		
		} else if( action == 'journeyman03' ) {
			if (!j2){
				character.sandbox.journeymanskillpoint[0] = character.sandbox.journeymanskillpoint[0]+1;
				setProgress(system, character.sandbox.journeymanskillpoint);
				j2 = true;
			}
			vorple.notify.closeAll();
            system.write("<p>That is correct, <font class='solutiontext'>a, or 1 in this case,</font> is the coefficient of the variable <font class='solutiontext'>x<sup>2</sup></font>.</p><br />");
			
				
		} else if ( action == 'journeyman04' ) {
				vorple.notify.closeAll();
				vorple.notify.show( "<p>Check with The Scribe for more details and try again.</p>", { type:'warning', layout: 'center' } );
		
		} else if( action == 'journeyman05' ) {
			if (!j3){
				character.sandbox.journeymanskillpoint[0] = character.sandbox.journeymanskillpoint[0]+1;
				setProgress(system, character.sandbox.journeymanskillpoint);
				j3 = true;
			}
			vorple.notify.closeAll();
            system.write("<p>That is correct, <font class='solutiontext'>c, or -6 in this case,</font> is the <font class='solutiontext'>constant</font>.</p><br />");
			
				
		} else if ( action == 'journeyman06' ) {
				
				vorple.notify.closeAll();
				vorple.notify.show( "<p>Check with The Scribe for more details and try again.</p>", { type:'warning', layout: 'center' } );
		
		} else if( action == 'journeyman07' ) {
			if (!j4){
				character.sandbox.journeymanskillpoint[0] = character.sandbox.journeymanskillpoint[0]+1;
				setProgress(system, character.sandbox.journeymanskillpoint);
				j4 = true;
			}
			vorple.notify.closeAll();
			
			system.write("<br/><p>That is correct,<br/> <font class='solutiontext'>d = -5<sup>2</sup> + (-4)*(1)*(-6) <br/>d = 25 + 24 <br/>d = 49</font> <br/><br/>\
			\
			Step 2: Based on what you have learned about quadratic equations, how many rational solutions are possible for this equation"
			+ vorple.html.link([
                        {
                            content: '0',
                            url: './journeyman10'
                        },
                        {
                            content: '1',
                            url: './journeyman10'
                        }
						,
                        {
                            content: '2',
                            url: './journeyman09'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' )
                )
				+ "<br/>"
				);
			
				
		} else if ( action == 'journeyman08' ) {
				
				vorple.notify.closeAll();
				vorple.notify.show( "<p>Please verify your <strong>coefficients</strong>, check with The Scribe for more details and try again.</p>", { type:'warning', layout: 'center' } );
				
				
		} else if ( action == 'journeyman09' ) {	
			if (!j5){
				character.sandbox.journeymanskillpoint[0] = character.sandbox.journeymanskillpoint[0]+1;
				setProgress(system, character.sandbox.journeymanskillpoint);
				j5 = true;
			}
			
			setCalcData(1.0, -5.0, -6.0);
		
			system.write("<br />That is correct, because the discriminant is positive and a perfect square there are two rational solutions, positive and negative. Now, let's solve for x. How did that haunting rhyme go" 
			+ vorple.html.link([
                        {
                            content: 'Play Song',
                            url: './qsong'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' )
                )
			+ "<br /><br />\
			\
			<div>Step 3: Solve for the roots (two rational solutions in this case)<br/><br/>\
			\
			<font class='solutiontext'>\
			\
			x1 = (-(-5)+sqrt(49))/(2 * 1) <br />\
			\
			x1 = (5+7)/2 <br />\
			\
			x1 = 12/2 <br />\
			\
			x1 = 6<br /><br />\
			\
			</font>\
			\
			and<br /><br />\
			\
			<font class='solutiontext'>\
			\
			x2 = (-(-5)-sqrt(49))/(2 * 1)<br />\
			\
			x2 = (5-7)/2 <br />\
			\
			x2 = -(2/2) <br />\
			\
			x2 = -1<br /><br />\
			\
			</font>\
			\
			The two solutions are <font class='solutiontext'><strong>6</strong></font> and <font class='solutiontext'><strong>-1</strong></font></div><br />\
			\
			<div>Step 4: Graph your solutions. Based on what you have learned about quadratic equations, which direction does the discriminant indicate the curve will open"
			+ vorple.html.link([
                        {
                            content: 'Up',
                            url: './journeyman11'
                        },
                        {
                            content: 'Down',
                            url: './journeyman12'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' )
                )
				+ "</div><br/>"
				);
				
				
		} else if ( action == 'journeyman10' ) {
			
			vorple.notify.closeAll();
		    vorple.notify.show( "<p>Check with The Scribe and try again.</p>", { type:'warning', layout: 'center' } );
			
		} else if ( action == 'qsong' ) {
			playSong();
			
		} else if ( action == 'journeyman11' ) {
			    if (!j6){
				
				character.sandbox.journeymanskillpoint[0] = character.sandbox.journeymanskillpoint[0]+1;
				setProgress(system, character.sandbox.journeymanskillpoint);
				
				j6 = true;
				}

				vorple.notify.closeAll();
				
				system.write("<div class='graphpoint'></div><p>You're right, the curve opens up. The following graph shows the shape of the curve generated by this equation.</p><br />");

				graphpaper(1.0, -5.0, -6.0, 80, 80, false);

				scrollToInsert('.graphpoint');
			
		} else if ( action == 'journeyman12' ) {
				
				vorple.notify.closeAll();
				
				system.write("<div  class='graphpoint'></div><p>Actually, the curve opens up. Check with The Scribe for more details. The following graph shows the shape of the curve generated by this equation.</p><br />");
			
				graphpaper(1.0, -5.0, -6.0, 80, 80, false);
				
				scrollToInsert('.graphpoint');
		}
	}
});
