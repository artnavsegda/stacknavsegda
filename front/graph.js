var data = new TimeSeries();
var xhttp = new XMLHttpRequest();
var dogbbq = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]

function createTimeline()
{
  var chart = new SmoothieChart();
  chart.addTimeSeries(data);
  chart.streamTo(document.getElementById("chart"));
}

function myFunction()
{
  xhttp.open("GET", "cgi-bin/engine.bin", false);
	xhttp.send();
  data.append(new Date().getTime(), xhttp.responseText);
}

function myFunction2()
{
  for (i = 0; i < 20; i++)
  {
    data.append(new Date().getTime()-(i*1000), dogbbq[i]);
  }
}
