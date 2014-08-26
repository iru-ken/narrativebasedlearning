//Quadratic Calculator, by Taydron
//http://www.taydron-domain.net   http://www.javascriptkit.com/script/script2/quadratic_cal.shtml#.UjyrAIZeZ8E
//Visit JavaScript Kit (http://javascriptkit.com) for script
function resetCalc() {
	a = 1.0;
	b = 0.0;
	c = 1.0;
	
	document.quadCalc.valA.value = a.toString();
	document.quadCalc.valB.value = b.toString();
	document.quadCalc.valC.value = c.toString();
}

function setCalcData(aFloat, bFloat, cFloat){
	document.quadCalc.valA.value = aFloat.toString();
	document.quadCalc.valB.value = bFloat.toString();
	document.quadCalc.valC.value = cFloat.toString();
			     
	quadData1();
}

function quadData1() {
var valA = document.quadCalc.valA.value;
var valB = document.quadCalc.valB.value;
var valC = document.quadCalc.valC.value;

percentagea = valA.toString()
percentageb = valB.toString()
percentagec = valC.toString()

var disc = (valB*valB)-(4*valA*valC);
var r_disc = Math.sqrt(disc);
var vax1 = (-valB+r_disc)/(2*valA);
var vax2 = (-valB-r_disc)/(2*valA);
var ing1 = ((valA*vax1*vax1*vax1)/3)+((valB*vax1*vax1)/2)+(valC*vax1);
var ing2 = ((valA*vax2*vax2*vax2)/3)+((valB*vax2*vax2)/2)+(valC*vax2);
var inte = ing1-ing2;
var sec_dx = (-valB)/(2*valA);
var sec_dy = (valA*sec_dx*sec_dx)+(valB*sec_dx)+(1*valC);
var e_val;
vax1 = Math.round(vax1*100)/100;
vax2 = Math.round(vax2*100)/100;
inte = Math.round(inte*100)/100;
sec_dx = Math.round(sec_dx*100)/100;
sec_dy = Math.round(sec_dy*100)/100;

if (valA == 0) {document.quadCalc.answer1.value = "This curve is not a quadratic. Enter a non-zero value in the first box.";} 
 else {
 if (disc>0) {
  document.quadCalc.answer1.value = "The curve intercepts the x-axis at: " +vax1+ " and " +vax2+ ".";
   {
   if (inte>0) {document.quadCalc.answer2.value = inte;} 
   if (inte<0) {document.quadCalc.answer2.value = -inte;} 
   if (inte=0) {document.quadCalc.answer2.value = 0;}
   }
  } if (disc<0) {
  document.quadCalc.answer1.value = "The curve has no real roots, because it does not intercept the real x-axis.";
  document.quadCalc.answer2.value = "N/A";
  } if (disc=0) {
  document.quadCalc.answer1.value = "The curve touches the x-axis at: " +vax1+ ".";
  document.quadCalc.answer2.value = "N/A";
  }
 //document.quadCalc.answer3.value = (2*valA)+ "x+" +valB;
 if (valA<0) {e_val = "maximum";} 
 if (valA>0) {e_val = "minimum";} 
 document.quadCalc.answer4.value = e_val;
 document.quadCalc.answer5.value = sec_dx+ " , " +sec_dy;
  }
 }