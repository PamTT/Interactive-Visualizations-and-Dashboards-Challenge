//function buildMetaData

function buildMetaData(idd) {
  console.log("This is a function for Building panel table");
  
  d3.json("./data/samples.json").then((data)=> {
    console.log(data);
    var metadata = data.metadata;
    console.log(metadata);
    //console.log(data.samples);
    //console.log(data.names);
    //console.log(data.metadata);
    console.log(data.metadata[0]);

    var inputValue = metadata.filter(x => x.id == idd);
    var inputID = inputValue[0];
  
    var PANEL = d3.select("#sample-metadata");
    PANEL.html("");

    Object.entries(inputID).forEach(([key,value]) => {
      PANEL.append("h6").text(`${key}: ${value}`);
    
  });
  ///HERE
  // call build gauge, buildGauge(data.WFREQ);
  
  ///HERE

});
}

//create function to build plots
function buildPlots(x) {
  console.log("This is a function for Building Bar and bubble Plot for new ID");

  d3.json("./data/samples.json").then((data)=> {
    
    var samples = data.samples;
    var samplesArray = samples.filter(q=> q.id == x)
    var result = samplesArray[0];
      console.log(result);
    var sample_values = result.sample_values;
      console.log(sample_values);
    var otu_ids = result.otu_ids;
    var textValues = result.otu_labels;

    //bar chart
    trace1 = {
      y: otu_ids.slice(0,10).reverse().map(otuID => `OTU ${otuID}`).reverse(),
      x: sample_values.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    };

    var barData = [trace1];

    var barlayout = {
        //title:"Bar Chart, Top Ten OTUs ",
        xaxis: {title:"OTU Values"},
        yaxis: {title: "OTU IDs"},
        margin: {t:30, l:150}
    };

    Plotly.newPlot("bar", barData, barlayout);
    
    //bubble chart
    trace2 = {
      x: otu_ids,
      y: sample_values,
      text: textValues,
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values,
        sizeref: 0.05,
        sizemode: 'area'}
    };

    var bubbleData = [trace2];

    var bubblelayout = {
      xaxis: {title: "OTU ID"},
      yaxis: {title: "OTU Values"}
    };

    Plotly.newPlot("bubble", bubbleData, bubblelayout);

  });

}

//create init function to load default table
function init() {
  
  var selectNewSample = d3.select("#selDataset");
  
  d3.json("./data/samples.json").then((data)=> {
    var names = data.names;
    console.log(names);
    names.forEach((sample) => {
      selectNewSample.append("option").text(sample).property("value",sample);
    });
  
  var defaultData = names[0];
  buildMetaData(defaultData);
  buildPlots(defaultData);
  });

};

//creat function for getting data once a new sample id is selected
function optionChanged(newID) {
  console.log("This is a function for Selecting New Sample");

  buildMetaData(newID);
  buildPlots(newID);
}

///Initializes the page with a default panel
//buildMetaData("941");
init();
