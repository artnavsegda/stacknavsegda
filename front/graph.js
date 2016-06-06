var data = new TimeSeries();
var xhttp = new XMLHttpRequest();

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
