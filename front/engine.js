console.log('main.js loaded');
var xhttp = new XMLHttpRequest();

function myFunction()
{
	xhttp.open("GET", "cgi-bin/engine.bin", false);
	xhttp.send();
	document.getElementById("demo").innerHTML = xhttp.responseText;
}
