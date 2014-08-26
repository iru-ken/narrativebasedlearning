// JavaScript Document

var clues = 0;

function addClue(system, str){
	clues++;
	
	system.write("<div><center><font class='solutiontext'>" + str + "</font></center></div>");
	
	if (clues > 3){
		system.write(destination);
	}
}

function notAClue(system, str){
	vorple.notify.show( "<p>" + str + "</p>", { type:'warning', layout: 'center' } );
}

function theSailor(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('sailorbadge', 1);
	vorple.notify.show( 'Congratulations, you have acheived the level of <strong>Sailor!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('sailor');
	postGoogleData('dimension1', 'Sailor');
	return false;
}

undum.game.situations.sailor = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p class='transient'><a href='sailingclues' >Let's examine the note again for clues.</a><br/></p>";
		character.sandbox.sailorskillpoint[1] = 8;
		character.sandbox.sailorskillpoint[0] = 1;
		setProgress(system, character.sandbox.sailorskillpoint);
		
		system.clearContent();
		
		system.write("<div id='sailor'><h1>The Sailor</h1>\
		 \
		<p>Ever seeking new adventures, you walk down the narrow beach, sand crumbling beneath your feet. As you approach the boat, you notice a piece of parchment affixed to the hull. The note reads,</p>\
		\
		<blockquote><i>To whomever finds my boat I offer an opportunity for service and wealth. This river is dangerous at night and due to the 6 mile per hour current of water against me on my journey upstream, it took me 2 hours longer to reach this point than I expected. As such, I had no means to return to my port of call in the time I had available; so, I took a land route instead. My village is 36 miles downstream. If you are up for the task, and can make it before nightfall, I will reward you handsomely for sailing my boat back to me.</i></blockquote>\
		\
		<p>As a succesfull journeyman, you are knowledge rich, but cash poor. The reward money could go far in helping you invest in your future. Checking the sun's shadows stretching from the tip of the boat across the sand, you estimate that you have approximately 3 hours until nightfall. Apply what you know to determine if you can make it.</p>\
		\
		<br/>" + destination + "</div>");
		
		scrollToTop();
		}
	}
);

undum.game.situations.sailingclues = new undum.Situation({
	enter:function(character, system, from){
		$("#title").hide(0);
		
		destination = "<p class='transient'><br />With all of the clues assembled, you set out to <a href='cruising'>determine if you can make it.</a></p><br/>";
		
		character.sandbox.sailorskillpoint[0] = character.sandbox.sailorskillpoint[0] + 1;
		setProgress(system, character.sandbox.sailorskillpoint);
		
		system.write("<div class='insert'><h1>Clues</h1>\
		 \
		<p>Mark each highlighted phrase as clue/no clue.</p>\
		\
		<blockquote>\
		\
		<i>To whomever finds my boat I offer an opportunity for service and "
		+ vorple.html.link([
                        {
                            content: 'clue',
                            url: './c1'
                        },
                        {
                            content: 'no clue',
                            url: './c2'
                        }
                    ],
                    'wealth. '
                )
		+ "This river is dangerous at night and due to the "
		+ vorple.html.link([
                        {
                            content: 'clue',
                            url: './c3'
                        },
                        {
                            content: 'no clue',
                            url: './c4'
                        }
                    ],
                    '6 mile per hour current of water'
                )
		+ "against me on my journey upstream, it took me " 
		+ vorple.html.link([
                        {
                            content: 'clue',
                            url: './c5'
                        },
                        {
                            content: 'no clue',
                            url: './c6'
                        }
                    ],
                    '2 hours longer '
                ) 
		+ "to reach this point than I expected. As such, I had no means to return to my port of call in the time I had available; so, I " + vorple.html.link([
                        {
                            content: 'clue',
                            url: './c7'
                        },
                        {
                            content: 'no clue',
                            url: './c8'
                        }
                    ],
                    'took a land route instead. '
                ) 
		+  "My village is " 
		+ vorple.html.link([
                        {
                            content: 'clue',
                            url: './c9'
                        },
                        {
                            content: 'no clue',
                            url: './c10'
                        }
                    ],
                    '36 miles downstream. '
                ) 
		+ "If you are up for the task, and can make it " 
		+ vorple.html.link([
                        {
                            content: 'clue',
                            url: './c11'
                        },
                        {
                            content: 'no clue',
                            url: './c12'
                        }
                    ],
                    'before nightfall,'
                ) 
		+ " I will reward you handsomely for sailing my boat back to me.</i>\
		\
		</blockquote>\
		\
		</p>\
		\
		</div><center><strong>List of Clues</strong></center></div>");
		
		scrollToInsert('.insert');
	},
		act: function( character, system, action ) {
			vorple.notify.closeAll();
			
        	if( action == 'c1' ) {
            	notAClue(system, 'Actually, while nice to know, this is not a clue.');
        	} else if( action == 'c2' ) {
            	notAClue(system, 'Correct, while nice to know, this is not a clue.');
        	} else if( action == 'c3' ) {
            	addClue(system, '6 mile per hour current of water');
        	} else if( action == 'c4' ) {
            	notAClue(system, 'Actually, 6 mile per hour current of water is a clue');
        	} else if( action == 'c5' ) {
            	addClue(system, '5 hours longer');
        	} else if( action == 'c6' ) {
            	notAClue(system, 'Actually, 5 hours longer is a clue');
        	} else if( action == 'c7' ) {
            	notAClue(system, 'Actually, while nice to know, this is not a clue.');
        	} else if( action == 'c8' ) {
            	notAClue(system, 'Correct, while nice to know, this is not a clue.');
        	} else if( action == 'c9' ) {
            	addClue(system, '36 miles downstream');
        	} else if( action == 'c10' ) {
            	notAClue(system, 'Actually, 36 miles downstream is a clue');
        	} else if( action == 'c11' ) {
            	addClue(system, 'before nightfall');
        	} else if( action == 'c12' ) {
            	notAClue(system, 'Actually, before nightfall is a clue');
        	}
    	}
});

undum.game.situations.cruising = new undum.Situation({
	enter:function(character, system, from){
		$("#title").hide(0);
		
		destination = "<p class='transient'>Now that we have identified the speed you need to travel, and you know how far you need to travel (36 miles), you identify the final variable as <font class='transient'>" + vorple.html.link([
                        {
                            content: 't, the time it takes to travel to the next village in hours',
                            url: './speed3'
                        },
                        {
                            content: 'm, the amount of money you will receive',
                            url: './speed4'
                        }
                    ],
                    '______________________.'
                ) 
				+ "</font><br/></p>";
		
		character.sandbox.sailorskillpoint[0] = character.sandbox.sailorskillpoint[0] + 1;
		setProgress(system, character.sandbox.sailorskillpoint);
		
		system.write("<div class='insert'><h1>Cruising Speed</h1>\
		\
		<p>Based on your clues, determine what you are trying to solve and call that x. <font class='transient'>Let <strong>x</strong> be" 
		+ vorple.html.link([
                        {
                            content: 'the speed in miles per hour of your boat in still water',
                            url: './speed1'
                        },
                        {
                            content: 'the time it takes to travel to the next village in hours',
                            url: './speed2'
                        },
                        {
                            content: 'the amount of money you will receive',
                            url: './speed2'
                        }
                    ],
                    '______________________.'
                ) 
		+ "</font></p><br /></div>");
		
		scrollToInsert('.insert');
	},
		act: function( character, system, action ) {
        	if( action == 'speed1' ) {
            	system.write("<div>That's correct, let <font class='solutiontext'>x = the speed in miles per hour of your boat in still water.</font></div><br />" + destination);
        	} else if( action == 'speed2' ) {
            	system.write("<div>Actually, let <font class='solutiontext'>x = the speed in miles per hour of your boat in still water.</font></div><br />" + destination);
        	} else if( action == 'speed3' ) {
            	system.write("<div>Correct, let <font class='solutiontext'>t = the time it takes to travel to the next village in hours.</font></div><br />");
				vorple.undum.doLink('distance');
        	} else if( action == 'speed4' ) {
            	system.write("<div>Actually, let <font class='solutiontext'>t = the time it takes to travel to the next village in hours.</font></div><br />");
				vorple.undum.doLink('distance');
        	}
    	}
});

undum.game.situations.distance = new undum.Situation({
	enter:function(character, system, from){
		$("#title").hide(0);
		
		destination = "<p class='transient'>With your reward money in hand, you are now sailing for opportunities. Across the village a sign reads, 'Stock Market.' You recall an old saying, 'Nothing ventured, nothing gained.' <a href='#' onClick='theInvestor();'>So you venture to the market to become an Investor.</a><br/></p>";
		
		character.sandbox.sailorskillpoint[0] = character.sandbox.sailorskillpoint[0] + 1;
		setProgress(system, character.sandbox.sailorskillpoint);
		
		system.write("<div class='insert'><h1>Going the Distance</h1>\
		\
		<p>With the two key variables, speed(x) and time(t), clearly identified, you are now ready to solve for speed so you can determine the amount of time it will take you to sail safely. You create a table to organize the clues according to Speed and Time.</p><br/>\
		\
<center><table width='300px' border='1' cellspacing='0' cellpadding='2'>\
\
  <tr>\
  \
    <td width='39'>&nbsp;</td>\
	\
    <td width='17'><strong>Time</strong></td>\
	\
    <td width='4%'>&nbsp;</td>\
	\
    <td width='18%'><strong>Speed</strong></td>\
	\
    <td width='22%'><strong>Distance</strong></td>\
	\
  </tr>\
  \
  <tr>\
  \
    <td>with current</td>\
	\
    <td>t</td>\
	\
    <td>*</td>\
	\
    <td>x+6</td>\
	\
    <td>= 36</td>\
	\
  </tr>\
  \
  <tr>\
  \
    <td>against current</td>\
	\
    <td>t+2</td>\
	\
    <td>*</td>\
	\
    <td>x-6</td>\
	\
    <td>= 36</td>\
	\
  </tr>\
  \
</table></center><br/>\
\
<div>From the table you can define the equations for travelling with and against the current. The equations are:</div><br/>\
\
<center><font class='solutiontext'>t(x + 6) = 36</font><br/><br/>\
\
<p>and</p><br/>\
\
<font class='solutiontext'>(t + 2)(x - 6) = 36</font></center><br/><br/>\
\
<div>In order to solve for Speed alone, you must remove the variable t from one of the equations. <font class='transient'>Which equation should you solve for t so that the result can be used to solve the other and determine the roots</font>" 
+ vorple.html.link([
                        {
                            content: 't(x + 6) = 36',
                            url: './equation1'
                        },
                        {
                            content: '(t + 2)(x - 6) = 36',
                            url: './equation2'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' )
                )
				+ "</div><br/>"
		);
		
		scrollToInsert('.insert');
	},
		act: function( character, system, action ) {
        	if( action == 'equation1' ) {
            	system.write("<div>That's correct, <br/><font class='solutiontext'>t(x + 6) = 36</font> <br/>easily converts to <br/><font class='solutiontext'>t = 36/(x + 6).</font></div><br/>");
				vorple.undum.doLink('sailtime');
				
        	} else if( action == 'equation2' ) {
            	system.write("<div>Actually, <br/><font class='solutiontext'>t(x + 6) = 36</font> <br/>is the easiest to isolate t and converts to <br/><font class='solutiontext'>t = 36/(x + 6)</font>.</div><br/>");
				vorple.undum.doLink('sailtime');
				
        	}
    	}
});

undum.game.situations.sailtime = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		$("#title").hide(0);
		
		destination = "<p class='transient'>You place your hands on the bow of the boat and push hard, jumping quickly to get in the boat. The trip is uneventful, although you see areas along the shore with activity in the shadows, as if someone is watching you pass by. At the village port a man motions you to a dock where he ties it to the landing. He helps you to dry land and thanks you for your service with smile and a bag of coins.</p><p>With your reward money in hand, you are now sailing for new opportunities. Across the village a sign reads, 'Stock Market.' You recall an old saying, 'Nothing ventured, nothing gained.' <a href='#' onClick='theInvestor();'>So you venture to the market to become an Investor.</a><br/></p>";
		
		character.sandbox.sailorskillpoint[0] = character.sandbox.sailorskillpoint[0] + 1;
		setProgress(system, character.sandbox.sailorskillpoint);
		
		system.write("<div class='insert'><h1>By Sunset</h1>\
		 \
		<p>Now that you have defined t as 36/(x + 6), replace t in the second equation, (t + 2)(x - 6) = 36, and solve for x:</p>\
		\
<blockquote><font class='solutiontext'>(36/(x+6) + 2)(x - 6) = 36</font></blockquote>\
\
<div>Then multiply each side by (x + 6) to remove the denominator</div>\
\
<blockquote><font class='solutiontext'>(x +6 )(36/(x+6) + 2)(x - 6) = 36(x + 6)</font><br/>\
\
<div><font class='solutiontext'>(36 + 2(x + 6))(x - 6) = 36x + 216</font></div>\
\
<div><font class='solutiontext'>(36 + 2x + 12)(x -6) = 36x + 216</font></div>\
\
<div><font class='solutiontext'>(48 + 2x)(x - 6) = 36x + 216</font></blockquote>\
\
<div>Use the F.O.I.L. (first, outside, inside, last) method to convert from factor form to quadratic equation:</div>\
\
<blockquote><font class='solutiontext'>48x - 288 + 2x<sup>2</sup> - 12x = 36x + 216</font></blockquote>\
\
<div>Combine like terms:</div>\
\
<blockquote><font class='solutiontext'>2x<sup>2</sup> = 504</font></blockquote>\
\
<div>Divide by the coefficient:</div>\
\
<blockquote><font class='solutiontext'>x<sup>2</sup> = 252</font></blockquote>\
\
<div>Since the result is a perfect square, there are two roots, positive and negative:</div><br/>\
\
<div>The speed(x) = <font class='solutiontext'><u>+</u>15.87 mph in still water</font></div><br/>\
\
<div>Since you are only traveling forward, you can eliminate the negative speed.</div><br/>\
\
<div>Fianally, calculate the amount of time it will take you to travel downstream with the current:</div>\
\
<blockquote><font class='solutiontext'>t = 36/(x + 6)</font><br/>\
\
<div><font class='solutiontext'>t = 36/21.87</font></div>\
\
<div><font class='solutiontext'>t = 1.65 hours</font></blockquote>\
\
<div>Now that you know how long the trip will take you can make a decision on the final clue. Will you make it before nightfall and receive your reward" 
+ vorple.html.link([
                        {
                            content: 'Yes, show me the money!',
                            url: './reward1'
                        },
                        {
                            content: 'No, I will wait for a safer time.',
                            url: './reward2'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' )
                )
		+ "<br/></div><br/>");
		
		},
		
		act: function( character, system, action ) {
        	if( action == 'reward1' ) {
            	system.write("<div>That's correct, <font class='solutiontext'>the boat ride will get you there before sunset.</font></div><br/>" + destination);
        	} else if( action == 'reward2' ) {
            	system.write("<div>Actually, <font class='solutiontext'>the boat ride will get you there before sunset.</font></div><br/>" + destination);
        	}
    	}
}
);
