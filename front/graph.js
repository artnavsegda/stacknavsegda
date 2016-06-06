var data = new TimeSeries();

function createTimeline()
{
  var chart = new SmoothieChart();
  chart.addTimeSeries(data);
  chart.streamTo(document.getElementById("chart"));
}

function myFunction()
{
  data.append(new Date().getTime(), Math.random());
}
