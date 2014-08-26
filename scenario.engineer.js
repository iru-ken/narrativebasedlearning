// JavaScript Document
var coef_array = [0,0,0];

function theEngineer(){
	$("#title").hide(0);
	vorple.notify.closeAll();
	vorple.core.system.setQuality('engineerbadge', 1);
	vorple.notify.show( 'Congratulations, you have achieved the level of <strong>Engineer!</strong>', { type:'information', layout: 'bottomCenter' } );
	vorple.undum.doLink('engineer');
	postGoogleData('dimension1', 'Engineer');
	return false;
}

undum.game.situations.engineer = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p class='transient'>Make sure you've carried out the actions above, then <a href='#' onClick='theEnd();'>advance to the role of Master</a>.<br/></p>";
		
		system.clearContent();
		system.write("<div id='engineer'><h1>The Engineer</h1>\
		\
		<p>Below the carving on the door there is a note that reads, 'Help Wanted!' (and in small print - 'must be fearless'). You open the door to reveal a vast room with vaulted ceilings and windows open on all sides. The air is cool, yet there is no fire in the hearth. There are no candles buring either, light streams in only from the outside.<br/><br/>The breeze from the window draws acros the room and carries with it the pungent odor of sulfer mixed with the sweetness of charcoal and saltpeter. Along the narrow back wall of the space is a large wooden bench covered with tools, paper, a large mortar and pestel, and the barrel of a cannon mounted on a gear-driven pedestal. A small bespectecled man in canvas overalls and shirt is carefully combining several of the piles of fine powder on some of the paper unaware you have entered.</p><br/>\
		\
		<p>As you walk along the planks of rough hewn wood, you notice spheres of lead and iron embedded in the floor at various distances from the bench. A sharp whistle startles you as you pass a brass cage and a large black bird calls out, 'never more.' It is only then you see the other objects lying about, forks, knives, half broken marbles, and what looks to be small tufts of brightly colored feathers. 'Never more', you hear the bird call out again, followed by a grunt from the man at the bench as he looks up at you and snaps at the raven, 'that's enough Edgar, your friends were too soft anyway, heavy metal is the solution.' 'And how can I help you?' he asks, eyeing you carefully.<br/><br/>\
		\
		<a href='./engineer02'>'I have some time on my hands and thought I might take the job if you're still hiring.'</a><br/><br/></p>");
		
		scrollToTop();
		},
		act: function( character, system, action ) {
        	if( action == 'engineer02' ) {
            	system.write("<p>The small man looks you over once again and asks, 'Do you have any experience?'<br/><br/>\
				\
				<a href='./engineer02a'>'Experience doing what, exactly?'</a><br/><br/></p>");
		
        	} else if( action == 'engineer02a' ) {
				
				system.write("<div>'Engineering', he replies. 'Ballistics to be more precise. This town is desperate for water. Our only clean supply comes from the waterfall way up on that ridge,' he says looking out the window. 'Our problem is the beavers up there dammed up the falls and there is no safe way for anyone to climb up and tear down the dam.' Shaking his head he looks at you, 'The village needs me to use my engineering skills to blow up the dam. I worked out the chemistry for the explosive, and created a sphere of iron that will fire smoothly from this metal barrel I call a cannon. But I can't figure out how to aim it so that it will hit the dam. See this sketch, it shows what I need to do, but I may only have one chance, so it has to be right.</div>");
				system.write("<div><center>" + vorple.media.image('cannongraph.png') + "</center></div>");
				system.write("<div>'Can you help?'<br/><br /></div>");
				system.write("<div><a href='./engineer03'>'Nope, haven't got a clue.'</a>&nbsp; or &nbsp;<a href='./engineer04'>'Absolutely.'</a><br/><br/></div>");
					
        	} else if( action == 'engineer03' ) {
				system.write("<p>Take another look. See how the curve of the sketch looks familiar.</p>");
				
				vorple.undum.doLink('engineer04');
				
			} else if( action == 'engineer04' ) {
				system.write("<p><center>" + vorple.media.image('parabola.png') + "</center</p>");
				
				system.write("<p>'Wonderful,' the man exclains.<br/><br/>You tell him, 'See, if you mirror it, it looks just like a parabola. And, I know how to solve the equation for a parabola.'</p><br/>");
				
				system.write("<div><a href='./engineer04a'>'For room and board, I can show you how.'</a><br/><br/></div>");
				
			} else if( action == 'engineer04a' ) {
				vorple.undum.doLink('theengineerngjob');
				
			}
    	}
	}
);

undum.game.situations.theengineerngjob = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p>Using the equation (y = -.00278x<sup>2</sup> + 250 ) given to you by the engineer for calculating the height of the cannon ball as it travels horizontally from the cannon, rounding to the nearest foot, use the quadratic formula to determine how far away from the dam you need to place the cannon to hit the dam on the first shot. <a href='#' onClick='theEngineeringSolution();'>determine how far away from the dam you need to place the cannon to hit the dam on the first shot</a>.<br/></p>";
		
		system.write("<h1 class='insert'>The Job</h1>\
		\
		<p>You recall that since a parabola is symetrical, the vertex, is the maximum height of y, which just so happens to be the location of the dam. You set the location of the dam at x = 0, y = 250 ft.</p><br/>" );
		
		setCalcData(-0.00278, 0, 250);
		graphpaper(-0.00278, 0, 250, 2400, 2400, false);
		
		scrollToInsert('.insert');
		},
		act: function( character, system, action ) {
        	if( action == 'engineer05' ) {
            	//stuffToDo();
        	}
    	}
	}
);

function theEngineeringSolution(){
	vorple.undum.doLink('theengineerngsolution');
}

undum.game.situations.theengineerngsolution = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<p class='transient'>The year passes by quickly working as an engineer. You return to the Stock Market to gather your earnings. With the skills you have aquired on your journey it is time to settle down to a business of your own and <a href='#' onClick='theMaster();'>advance to the role of Master</a>.<br/></p>";
		
		system.write("<div class='insert'><br/><br/>The equation for the cannon shot is y = -.00278x<sup>2</sup> + 250. In order to use the quadratic formula, you need values for the coefficients. Select a coefficient and choose its value from the pop-up list.</div>"
		+ vorple.html.tag('div', 
			vorple.html.tag('center',
                '<div class="h3textsize">'
				+ vorple.html.link([
                        {
                            content: '-.00278',
                            url: './esolution02'
                        },
                        {
                            content: '250',
                            url: './esolution01'
                        }
						,
                        {
                            content: '0',
                            url: './esolution01'
                        }
						,
                        {
                            content: '1',
                            url: './esolution01'
                        }
                    ],
                    'a, '
                )
                + vorple.html.link([
                        {
                            content: '-.00278',
                            url: './esolution03'
                        },
                        {
                            content: '250',
                            url: './esolution04'
                        }
						,
                        {
                            content: '0',
                            url: './esolution03'
                        }
						,
                        {
                            content: '1',
                            url: './esolution03'
                        }
                    ],
                    'b, '
                )
				+ 'and '
                + vorple.html.link([
                        {
                            content: '-.00278',
                            url: './esolution06'
                        },
                        {
                            content: '250',
                            url: './esolution06'
                        }
						,
                        {
                            content: '0',
                            url: './esolution05'
                        }
						,
                        {
                            content: '1',
                            url: './esolution06'
                        }
                    ],
                    'c'
                )
				+ "</div><br/>"
            )
			)
        );
		
		scrollToInsert('.insert');
		},
		act: function( character, system, action ) {
        	if( action == 'esolution01' ) {
            	system.write("<div>Actually, the value for coefficient a is -.00278.</div><br/>");
				coef_array[0] = 1;
				
        	} else if( action == 'esolution02' ) {
            	system.write("<div>Yes, the value for coefficient a is -.00278.</div><br/>");
				coef_array[0] = 1;
				
        	} else if( action == 'esolution03' ) {
            	system.write("<div>Actually, the value for coefficient b is 0, which means the bx element of the function is removed because it always equals 0.</div><br/>");
				coef_array[1] = 1;
				
        	} else if( action == 'esolution04' ) {
            	system.write("<div>Yes, the value for coefficient b is 0.</div><br/>");
				coef_array[1] = 1;
				
        	} else if( action == 'esolution05' ) {
            	system.write("<div>Actually, the value for coefficient c is 250.</div><br/>");
				coef_array[2] = 1;
				
        	} else if( action == 'esolution06' ) {
            	system.write("<div>Yes, the value for coefficient c is 250.</div><br/>");
				coef_array[2] = 1;
				
        	}
			
			if ((coef_array[0] + coef_array[1] + coef_array[2])>2){
				vorple.undum.doLink('theengineerngfunction');
			}
    	}
	}
);

undum.game.situations.theengineerngfunction = new undum.Situation({
	exit: function(character, system, to) {
                system.setQuality("usrprogress", 0);
            },
			
	enter:function(character, system, from){
		destination = "<div class='transient'>After solving the water problem the requests for more solutions came pouring in. The year passes by quickly working as an engineer. You return to the Stock Market to gather your earnings. With the skills you have aquired on your journey it is time to settle down to a business of your own and <a href='#' onClick='theEnd();'>advance to the role of Master</a>.<br/></div>";
		
		system.write("<p class='insert'>Now that you have identified the coefficients, solve for any roots using the quadratic formula (see the Scribe if you need help remembering the formula). Based on your answer, how far away from the dam you need to place the cannon to hit the dam on the first shot (round to the nearest whole number)<br />"
		+ vorple.html.tag('div', 
			vorple.html.tag('center',
                vorple.html.link([
                        {
                            content: '-250',
                            url: './eformula01'
                        },
                        {
                            content: '-300',
                            url: './eformula02'
                        }
						,
                        {
                            content: '-278',
                            url: './eformula01'
                        }
						,
                        {
                            content: '-100',
                            url: './eformula01'
                        }
                    ],
                    '<strong>? </strong>' + vorple.media.image( 'external_link.png' ) + '<br />'
                )
            )
			)
        );
		
		scrollToInsert('.insert');
		},
		act: function( character, system, action ) {
        	if( action == 'eformula01' ) {
            	system.write("<p>Actually, if you use the Scribe calculator, you discover there are two roots -300 and 300 for this equation. Since you will place the cannon before the dam, you only need to use -300ft.</p>");
				
				
        	} else if( action == 'eformula02' ) {
            	system.write("<p>As you discover, there are two roots -300 and 300 for this equation. Since you will place the cannon before the dam, you only need to use -300ft.</p>");
				
				
        	} 
			
			system.write("<p><br/>" + destination + "</p>");
    	}
	}
);