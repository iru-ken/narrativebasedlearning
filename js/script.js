/**
Copyright &copy; <!--(C) --> 2012 Willson Smith - http://willsonsmith.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

  var canvas, context, buttonDown = false;
  
  var interactiveGraph = false;
  
  var cola, colb, colc = false;
  
  var tabs;
  var tabsWidth; 
  
  var xdown = 0;
  var xup = 0;
  
  var ydown = 0;
  var yup = 0;
  
  var xp = 12;
  var xp2 = 6;
  
  var newx = 0;
  var newy = 0;
  
  var cgx = 0;
  var cgy = 0;
  
  var cix = 0;
  var ciy = 0;
  
  var percentagea = 1;
  var percentageb = 0; 
  var percentagec = 1;
  
  var cw2, ch2 = 500;
  
  var isMobile = false;
  
  if( 	navigator.userAgent.match(/Android/i)
 		|| navigator.userAgent.match(/webOS/i)
 		|| navigator.userAgent.match(/iPhone/i)
 		|| navigator.userAgent.match(/iPod/i)
 		|| navigator.userAgent.match(/iPad/i)
 		|| navigator.userAgent.match(/BlackBerry/i)
 		|| navigator.userAgent.match(/Windows Phone/i)
 	){
   		isMobile = true;
	}
	
  //window.addEventListener('load', initApp, false);
  //function clearApp() {
	//  canvas = VOID;
  //}
  
  function initGraph() {
  	/*setTimeout(function() { window.scrollTo(0, 1); }, 10);*/ //hide the address bar of the browser.
	
  	canvas = document.getElementById('canvas2');
    cw2 = canvas.width;
    ch2 = canvas.height;
	
  	//setCanvasDimension();
  	initializeEvents();
	
	readData();
  }
  
  function closeGraph(){
	  canvas = 0;
  }
  
  function windowToCanvas(canvasobj, x, y) {
   var bbox = canvasobj.getBoundingClientRect();

   return { x: x - bbox.left * (canvasobj.width  / bbox.width),
            y: y - bbox.top  * (canvasobj.height / bbox.height)
          };
	}

  
  function initializeEvents() {
	/*document.body.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false);*/
	
	tabs = document.getElementById("content_wrapper");
	/*tabs.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false);*/
	if (interactiveGraph){
	if (isMobile) {
		canvas.addEventListener('touchstart', startPaint, false);
    	canvas.addEventListener('touchmove', continuePaint, false);
    	canvas.addEventListener('touchend', stopPaint, false);
  	} else {
		canvas.addEventListener("mousedown", startPaint, false);
		canvas.addEventListener("mousemove", continuePaint, false);
		canvas.addEventListener("mouseup", stopPaint, false);
  	}
	}
  }
  
  function toInteger(number){
	  return Math.round(
		  Number(number)  
 	  );//Possible alteration as to not create antialiasing
  }
      
  function startPaint(evt) {
    if(!buttonDown)
    {
  		buttonDown = true;
		
		if (isMobile) {
			cix =  evt.touches[0].clientX;
			ciy =  evt.touches[0].clientY;
		} else {
    		cix = evt.clientX;
    		ciy = evt.clientY;
		}
		
		var loc = windowToCanvas(canvas, cix, ciy);
		
		cgx = toInteger(loc.x) * (500.00/(Math.min(500, tabs.offsetWidth)));
		cgy = toInteger(loc.y) * (500.00/(Math.min(500, tabs.offsetWidth)));
		
		
		newx = cgx;
		newy = cgy;

		tabsWidth = (tabs.offsetWidth - 8) * 1.000001;

		var tOffset = cw2 - 100;
		
		if (newy > tOffset) {
			if (newx < (tOffset-10)){
				colb = true;
			}
		} else {
			if (newy > 40) {
				if (newx < (tOffset-10)){
					cola = true;
				} else {
					if (newx > tOffset){
						colc = true;
					}
				}
			}
		}
		
		if (newy < 40) {
			if (newx < (cw2/2.0)) {
				graphOut();
			} else {
				if (newx > (cw2/2.0)) {
				graphIn();
				}
			}
		}
		
		readData();
    }
    evt.preventDefault();
  }
  
  function continuePaint(evt) {
    if(buttonDown)
    {
		if (isMobile) {
			cix =  evt.touches[0].clientX;
			ciy =  evt.touches[0].clientY;
		} else {
    		cix = evt.clientX;
    		ciy = evt.clientY;
		}
		
		var loc = windowToCanvas(canvas, cix, ciy);
		
		cgx = toInteger(loc.x) * (500.00/(Math.min(500, tabs.offsetWidth)));
		cgy = toInteger(loc.y) * (500.00/(Math.min(500, tabs.offsetWidth)));
		
		newx = cgx;
		newy = cgy;
		
		tabsWidth = (tabs.offsetWidth - 8) * 1.000001;
		
		var tOffset = cw2 - 100;
		
		//width of parabola
		if (cola){percentagea = -xp2 +(xp * newx/(tOffset-10));}
				//$( "#spinner_a" ).val(percentagea);
				
		if (colb){percentageb = xp2-(xp * newx/(tOffset-40));}
				//$( "#spinner_b" ).val(percentageb);
		
		if (colc){percentagec = xp2-(xp * newy/cw2);}
			//$( "#spinner_c" ).val(percentagec);
		
		readData();
    }
	evt.preventDefault();
  }
  
  function stopPaint(evt) {
	cola = false;
	colb = false;
	colc = false;
	  
    buttonDown = false;
	evt.preventDefault();
  }
  
  function graphIn() {
  	    dxm();
        dym();
		
		xp = xp/2.0;
		xp2 = xp/2.0;
		
		//evt.preventDefault();
  }
  
  function graphOut() {
    dxp();
    dyp();
	
	xp = xp*2.0;
	xp2 = xp/2.0;
		
	//evt.preventDefault();
  }