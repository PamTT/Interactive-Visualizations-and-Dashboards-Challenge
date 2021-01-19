//function buildMetaData

function buildMetaData(idd) {
  console.log("This is a function for Building panel table");
  d3.json("/data/samples.json").then((data)=> {
    var metadata = data.metadata;
    //console.log(data.samples);
    //console.log(data.names);
    //console.log(data.metadata);
    //console.log(data.metadata[0]);

    var inputValue = metadata.filter(x => x.id == idd);
    var inputID = inputValue[0];
  
    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");

    Object.entries(inputID).forEach(([key,value]) => {
      PANEL.append("h3").text(`${key}: ${value}`);
    
  });
  // call build gauge
});
}

//create function to build plots
function buildPlots(x) {
  console.log("This is a function for Building Bar and bubble Plot for new ID");

  d3.json("/data/samples.json").then(function(data) {
    var xData = data.otu_ids.slice(0,10);
    var yData = data.sample_values.slice(0,10);
    var markerSize = data.sample_values;
    var markerColor = data.otu_ids;
    var textValues = data.otu_labels;

    //bar chart
    trace1 = {
      x: xData,
      y: yData,
      type: "bar"
    };

    var data = [trace1];

    var barlayout = {
        title:"Bar",
        xaxis: {title:"OTU IDs"},
        yaxis: {title: "OTU Values"}
    };

    Plotly.newPlot("bar", data, layout);

    //bubble chart
    trace2 = {
      x: xData,
      y: yData,
      text: textValues,
      mode: "markers",
      marker: {
        color: markerColor,
        size: markerSize}
    };

    var bubbledata = [trace2];

    var bubblelayout = {
      xaxis: {title: "OTU ID"}
    };

    Plotly.newPlot("bubble", bubbledata, bubblelayout);

  });

}

//create init function to load default table
function init() {
  console.log("This is a function for Building Default Panel");


    //var metadata = data.metadata;
    //var defaultData = data.metadata[0];
    //console.log(data.samples);
    //console.log(data.names);
    //console.log(data.metadata);
    //console.log(data.metadata[0]);

    //var inputValue = metadata.filter(x => x.id == idd);
    //var inputID = inputValue[0];

    //var PANEL = d3.select("#sample-metadata");
    //PANEL.html("");
    var selectNewSample = d3.select("#selNames");
    
    //selectNewSample.html("");

    d3.json("/data/samples.json").then((xx)=> {
      Object.entries(xx).forEach((sample) => {
        selectNewSample.append("option").text(sample).property("value",sample);
      });
     
    //var defaultId = "940"; //select the first sample from the list
    var defaultData = xx[0];
    buildMetaData(defaultData);
    buildPlots(defaultData);
    });

};


//creat function for getting data once a new sample id is selected
function selectNewSample(newID) {
  console.log("This is a function for Selecting New Sample");

  buildMetaData(newID);
  buildPlots(newID);
}


///Initializes the page with a default panel
buildMetaData("941");
init();
