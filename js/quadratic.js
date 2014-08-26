var xcenter,ycenter,radius;


var dx;
var dy;

var xticks;
var yticks;

var h2,h,w2,w;

var ctx2;
var canvas2;

var y,z,x;
var a,b,c;

var xvertex,yvertex;
var acoef,bcoef,ccoef;

var ycoordR=[]; 
var xcoordR=[]; 

var ycoordL=[]; 
var xcoordL=[];

var xshift;
var yshift;

Dx=40;
Dy=40;

dx=40;
dy=40;

var xshift;
var yshift;

var L1;


function dxp(){
dx=dx*2;
      initialization();
      draw();
}

function dxm(){
dx=dx/2;
      initialization();
      draw();
}

function dyp(){
dy=dy*2;
      initialization();
      draw();
}

function dym(){
dy=dy/2;
      initialization();
      draw();
}

function readData() {

	        var astring = percentagea;//document.mainform.acoef.value;
            var bstring = percentageb;//document.mainform.bcoef.value;
            var cstring = percentagec;//document.mainform.ccoef.value;
			
			console.log("readdata");
			
            ax = parseFloat(""+astring);
            bx = parseFloat(""+bstring);
            cx = parseFloat(""+cstring);
			
			scribeGraph(ax, bx, cx);
}

function scribeGraph(ax, bx, cx){
			//alert(ax + " " + bx + " " + cx);
			
			a = ax;
            b = bx;
            c = cx;
			
			//console.log("scribe" + a + " " + b + " " + c);
			
			var aFloat = a.toFixed(2);
			var bFloat = b.toFixed(2);
			var cFloat = c.toFixed(2);
			
			document.quadCalc.valA.value = aFloat;
			document.quadCalc.valB.value = bFloat;
			document.quadCalc.valC.value = cFloat;
			
            initialization();
			quadData1();
            draw(); 
			 
			writeA("a = " + aFloat.toString());
			writeB("b = " + bFloat.toString());
			writeC("c = " + cFloat.toString());
}

function writeDot(str, locv, loch){
	ft = 16;//toInteger(18 * (1/(tabsWidth/500.0)));
	
	ctx2.beginPath();
    ctx2.font= ft + "px Verdana";
    ctx2.fillStyle = "blue";
    ctx2.fillText(str, locv, loch);
}

function writeA(str){
	ft = 16;//toInteger(18 * (1/(tabsWidth/500.0)));
	
	ctx2.beginPath();
    ctx2.font= ft + "px Verdana";
    ctx2.fillStyle = "blue";
    ctx2.fillText(str,50,75);
}

function writeB(str){
	ft = 16;//toInteger(18 * (1/(tabsWidth/500.0)));
	
	ctx2.beginPath();
    ctx2.font= ft + "px Verdana";
    ctx2.fillStyle = "blue";
    ctx2.fillText(str,50,75 + (ft * 2));
}

function writeC(str){
	ft = 16;//toInteger(18 * (1/(tabsWidth/500.0)));
	
	ctx2.beginPath();
    ctx2.font= ft + "px Verdana";
    ctx2.fillStyle = "blue";
    ctx2.fillText(str,50,75 + (ft * 4));
}

function warning(str){
	ctx2.beginPath();
    ctx2.font="12px Verdana";
    ctx2.fillStyle = "blue";
    ctx2.fillText(str,w2-220,h2-15);
}

function initialization(){

           canvas2 = document.getElementById('canvas2');
           ctx2 = canvas2.getContext('2d');
           w2 = canvas2.width;
           h2 = canvas2.height;
		   
		  

           ctx2.save();
           ctx2.clearRect(0,0,w2,h2);
          

           xshift=w2/2;
           yshift=h2/2;

			
// draw axes

             ctx2.lineWidth = 2;
             ctx2.strokeStyle = "black";
             ctx2.beginPath();

             ctx2.moveTo(xshift, 0);
             ctx2.lineTo(xshift, h2);

             ctx2.moveTo(0, h2-yshift);
             ctx2.lineTo(w2, h2-yshift);

             ctx2.stroke();

             Kx = w2/Dx+1;

             Ky = h2/Dy+1;

// ticks and labels on x axis

             ctx2.lineWidth = 0.2;

         for (j=0;j<=Kx;j++) {
             

             ctx2.strokeStyle = "grey";

             ctx2.beginPath();
             ctx2.moveTo(j*Dx+xshift, 0);
             ctx2.lineTo(j*Dx+xshift, h2);
             ctx2.stroke()

             ctx2.strokeStyle = "blue";
             ctx2.beginPath();
             ctx2.moveTo(j*Dx+xshift, h2-yshift);
             ctx2.lineTo(j*Dx+xshift, h2-10-yshift);
             ctx2.stroke()


// labels
			 ft = 18 * (1/(w2/500.0));
			  
             ctx2.beginPath();
             ctx2.font=ft + "px Verdana";
             ctx2.fillStyle = "black";
             ctx2.fillText((j*dx/Dx).toString(),j*Dx+xshift,h2+20-yshift);

                
            }


         for (j=0;j<=Kx;j++) {
             ctx2.strokeStyle = "blue";
             ctx2.beginPath();
             ctx2.moveTo(-j*Dx+xshift, h2-yshift);
             ctx2.lineTo(-j*Dx+xshift, h2-10-yshift);


             ctx2.beginPath();
             ctx2.strokeStyle = "grey";
             ctx2.moveTo(-j*Dx+xshift, 0);
             ctx2.lineTo(-j*Dx+xshift, h2);
// labels

             ctx2.stroke();
         //    ctx2.moveTo(j*dx+xshift, 0);
             ctx2.fillText((-j*dx/Dx).toString(),-j*Dx+xshift,h2+20-yshift);

            }


// Ticks on y - axis

         for (k=0;k<=Ky;k++) {
             ctx2.strokeStyle = "black";
             ctx2.beginPath();
             ctx2.moveTo(0+xshift, h2-k*Dy-yshift);
             ctx2.lineTo(10+xshift, h2- k*Dy-yshift);

             ctx2.strokeStyle = "grey";

             ctx2.beginPath();
             ctx2.moveTo(0, h2-k*Dy-yshift);
             ctx2.lineTo(w2, h2- k*Dy-yshift);

             ctx2.stroke();

// labels
            
            
             ctx2.beginPath();
             ctx2.font= ft + "px Verdana";
             ctx2.fillStyle = "black";
             ctx2.fillText((k*dy/Dy).toString(),xshift-20,yshift-k*Dy);

            }

  

         for (k=0;k<=Ky;k++) {
             ctx2.strokeStyle = "blue";
             ctx2.beginPath();
             ctx2.moveTo(0+xshift, h2+k*Dy-yshift);
             ctx2.lineTo(10+xshift, h2+ k*Dy-yshift);

             ctx2.strokeStyle = "grey";

             ctx2.beginPath();
             ctx2.moveTo(0, h2+k*Dy-yshift);
             ctx2.lineTo(w2, h2+ k*Dy-yshift);

             ctx2.stroke();

// labels
             
             ctx2.beginPath();
             ctx2.font=ft + "px Verdana";
             ctx2.fillStyle = "black";
             ctx2.fillText((-k*dy/Dy).toString(),xshift-20,yshift+k*Dy);

            }

// ------------- drawing arrows on x axis-------------

             ctx2.fillStyle = "black";
             ctx2.beginPath();
             ctx2.moveTo(w2, yshift);
             ctx2.lineTo(w2-15, yshift-10);
             ctx2.lineTo(w2-10, yshift);
             ctx2.lineTo(w2-15, yshift+10);
             ctx2.lineTo(w2, yshift);

             ctx2.closePath();
             ctx2.fill();

// ---------------- drawing arrows on y axis---------------

             ctx2.fillStyle = "black";
             ctx2.beginPath();

             ctx2.moveTo(xshift, 0);
             ctx2.lineTo(xshift-10, 15);

             ctx2.lineTo(xshift, 10);
             ctx2.lineTo(xshift+10, 15);
             ctx2.moveTo(xshift, 0);

             ctx2.closePath();
             ctx2.fill();


// --------------------------------------
         

          var k1=Dx/dx;
          var k2=Dy/dy;

          L1=2*w2;

       

          xvertex=-b/(2*a);
          yvertex=a*(xvertex)*(xvertex)+b*(xvertex)+c;

          delta = b*b-4*a*c;

          if(delta>=0){
          x1=(-b+Math.sqrt(delta))/(2*a);
          x2=(-b-Math.sqrt(delta))/(2*a);
          }

          yint = c;

          for (i=0;i<=L1;i++)
           {

              xcoordR[i] = xshift + Dx*k1*(xvertex)+i;

              x = xvertex + i/(k1*Dx);

              ycoordR[i] = yshift - (Dy*k2)*(a*x*x+b*x+c);


           }

          for (i=0;i<=L1;i++)
           {
              xcoordL[i] = xshift + Dx*k1*(xvertex)-i;

              x = xvertex - i/(k1*Dx);
              ycoordL[i] = yshift - (Dy*k2)*(a*x*x+b*x+c);


           }

}

// ------------------- Draw graph  -------------------------------
 

function draw(x){
       
          ctx2.strokeStyle = "purple";
          ctx2.beginPath();
          ctx2.lineWidth = 2;
          ctx2.moveTo(xcoordR[0], ycoordR[0]);

// draw right side
         
          for (i=0;i<=L1;i++)
             {

                        ctx2.bezierCurveTo(xcoordR[i], ycoordR[i], xcoordR[i+1], ycoordR[i+1], xcoordR[i+2], ycoordR[i+2]);

             i=i+2;

                             
             }
            ctx2.stroke();

// draw left side

                     ctx2.moveTo(xcoordL[0], ycoordL[0]);
         
          for (i=0;i<=L1;i++)
             {

                        ctx2.bezierCurveTo(xcoordL[i], ycoordL[i], xcoordL[i+1], ycoordL[i+1], xcoordL[i+2], ycoordL[i+2]);

             i=i+2;

                             
             }
            ctx2.stroke();


// ---------- draw vertex ------------------------------------

       ctx2.fillStyle = "red";
          ctx2.beginPath();
          ctx2.arc(xcoordL[0], ycoordL[0],4,0,2*Math.PI);
          ctx2.fill();

// ------------- display vertex, x and y intercepts ----------

           ctx2.fillStyle = "red";
           ctx2.font = "16px Arial";
           ctx2.fillText("vertex:"+'('+(xvertex.toFixed(3)).toString()+','+(yvertex.toFixed(3)).toString()+')',20, h2-60);

ctx2.fillText("yintercept:"+'('+'0'+','+(c.toFixed(3)).toString()+')',20, h2-40);

ctx2.fillText("b^2-4ac = "+(delta.toFixed(3)).toString(),50,75 + (16 * 6)); //w2/2+20, h2-80);


if(delta>=0){
ctx2.fillText("xintercept-1:"+'('+(x1.toFixed(3)).toString()+','+'0'+')',w2/2+20, h2-60);

ctx2.fillText("xintercept-2:"+'('+(x2.toFixed(3)).toString()+','+'0'+')',w2/2+20, h2-40);

ctx2.fillStyle = "";
}
}

onload=function() {
   //initialization();
}


