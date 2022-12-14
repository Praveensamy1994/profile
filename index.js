let btn = document.getElementById("btn");
let container = document.getElementById("container");
let progress = document.getElementById("progress");

btn.addEventListener("click", (event) => {
  console.log("event",event.target.classList)
  if (event.target.classList == "bar-chart") {
      container.classList.remove("show");
      progress.classList.add('show');
      event.target.classList.remove('bar-chart');
      event.target.src="radar-chart-icon.png";
  } else {
      container.classList.add("show");
      progress.classList.remove('show');
      event.target.classList.add('bar-chart');
      event.target.src="bar-chart-icon.png"
  }
})

anychart.onDocumentReady(function () {

  // our data from bulbapedia
  var data1 = [
    {x: "INTELLECT", value: .20, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "EMOTIONALITY", value: .79, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "ASSERTIVENESS", value: .13, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "SEKF-EFFECIENCY", value: .80, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "SYMPATHY", value: .10, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "PROFESSIONALISM", value: .52, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "ORDERLINESS", value: .10, marker:{enabled:true, type:"circle", fill:"#E45539"}}, 
    {x: "MODESY", value: .80, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "SELF-CONSCIOUSNESS", value: .66, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "ACTIVITY LEVEL/ENERGITIC", value: .27, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "ARTISTIC INTERETS", value: .85, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "SELF-DISCPLINE", value: .60, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "TRUST", value: .13, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "OUTGOING", value: .80, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "AUTHORITY-CHALLENGING", value: .90, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "IMAGINATION", value: .50, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "COOPERATION", value: .60, marker:{enabled:true, type:"circle", fill:"#E45539"}},
    {x: "UNCOMPROMISING", value: .50, marker:{enabled:true, type:"circle", fill:"#E45539"}},
  ];  

  // create radar chart
  var chart = anychart.radar();

  // set chart yScale settings
  chart.yScale()
    .minimum(0)
    .maximum(1)
    .ticks({'interval':.25});

  // color alternating cells
  chart.yGrid().palette(["gray 0.1", "gray 0.2"]);

  // create first series
  chart.area(data1).markers(true).fill("#808080", 0.7).stroke("#a6a6a6");

  // set chart title
  // chart.title("")
  // set legend
  // .legend(true);

  // set container id for the chart
  chart.container('container');
  // initiate chart drawing
  chart.draw();

});
