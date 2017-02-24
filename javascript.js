var x= prompt("Enter Player One Name:", "Player 1 ");
var y= prompt("Enter Player Two Name:", "Player 2");

function playerNames(){
	document.write(x+" Vs "+y);
}
function random1() {
	var x= Math.round(Math.random()*6);
	var y= Math.round(Math.random()*6);
	var z=Math.round(Math.random()*6);
	var S= x+y+z;
	document.getElementById("random1").innerHTML = ("["+x+" , "+y+" , "+z+"]"+"<br />"+"<br />"+ "Sum : "+ S);
}
function random2() {
	var x= Math.round(Math.random()*6);
	var y= Math.round(Math.random()*6);
	var z=Math.round(Math.random()*6);
	var S= x+y+z;
	document.getElementById("random2").innerHTML = ("["+x+" , "+y+" , "+z+"]"+"<br />"+"<br />"+ "Sum : "+ S);
}
// DOM with methods applied here