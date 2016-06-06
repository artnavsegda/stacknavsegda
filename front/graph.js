var data = new TimeSeries();
var xhttp = new XMLHttpRequest();

function createTimeline()
{
  var chart = new SmoothieChart({millisPerPixel:100,maxValue:7000,minValue:5000,grid:{millisPerLine:10000,verticalSections:10,strokeStyle:'#000000'}});
  chart.addTimeSeries(data);
  chart.streamTo(document.getElementById("chart"));
}

function myFunction()
{
	xhttp.open("GET", "cgi-bin/engine.bin?9", false);
	xhttp.send();
	document.getElementById("demo").innerHTML = xhttp.responseText;
	data.append(new Date().getTime(), xhttp.responseText);
}

function myUp()
{
	xhttp.open("GET", "cgi-bin/control.bin?64", false);
	xhttp.send();
}

function myDown()
{
	xhttp.open("GET", "cgi-bin/control.bin?128", false);
	xhttp.send();
}
