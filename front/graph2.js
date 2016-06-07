var data = new TimeSeries();
var xhttp = new XMLHttpRequest();
var dogbbq = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]

function createTimeline()
{
  //var chart = new SmoothieChart({millisPerPixel:100,maxValue:7000,minValue:5000,grid:{millisPerLine:10000,verticalSections:10,strokeStyle:'#000000'}});
  var chart = new SmoothieChart({interpolation:'linear',millisPerPixel:100,maxValue:7000,minValue:5000,grid:{millisPerLine:10000,verticalSections:10,strokeStyle:'#000000'}});
  chart.addTimeSeries(data);
  chart.streamTo(document.getElementById("chart"), 1000);

  myFunction2();
  setInterval(function(){myFunction()}, 100);
}

function myFunction()
{
	xhttp.open("POST", "cgi-bin/engine.bin?8", false);
	xhttp.send();
	document.getElementById("demo").innerHTML = xhttp.responseText;
	data.append(new Date().getTime(), xhttp.responseText);
}

function myUp()
{
	xhttp.open("POST", "cgi-bin/control.bin?128", false);
	xhttp.send();
}

function myDown()
{
	xhttp.open("POST", "cgi-bin/control.bin?64", false);
	xhttp.send();
}

function myFunction2()
{
	xhttp.open("POST", "cgi-bin/runner.bin", false);
	xhttp.send();
	var arava = JSON.parse(xhttp.responseText);
  for (i = 0; i < 100; i++)
  {
    data.append(new Date().getTime()-(i*1000), arava[i]);
  }
}
