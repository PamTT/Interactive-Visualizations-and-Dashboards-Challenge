// Function buildmetaData
var metaData = d3.json("/data/samples.json").then(function(data) {
    console.log(data);
});


function buildMetaData () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputID = d3.select("#selDataset");

    // Get the value property of the input element
    var inputValue = inputID.property("value");
    console.log(inputValue);
    

    var filteredData = metaData.filter(sampleData => sampleData.id === inputValue);
    console.log(filteredData);

    var idd = sampleData.otu_ids;
    var ethnicityy = sampleData.ethnicity;
    var genderr = sampleData.gender;
    var agee = sampleData.age;
    var locationn = sampleData.location;
    var bbtypee = sampleData.bbtype;
    var wfreqq = sampleData.wfreq;

    // Then, select the unordered list element by class name
    var list = d3.select(".panel-title-summary");
    list.html("");

    list.append("li").text(`id: ${idd}`);
};

// Function barPlot
d3.json("/data/samples.json").then(function(data) {
    
    var yData = data.sample_values.slice(0,10);
    var xData = data.otu_ids.slice(0,10);
    var marker = data.sample_values.slice(0,10);
    var markerSize = data.sample_values;

    var trace1 = {
        x: xData,
        y: yData,
        type: "bar"
    };

    var data = [trace1];

    var layout = {
        title:"Bar",
        xaxis: {title:"OTU IDs"},
        yaxis: {title: "OTU Values"}
    };

    updatePlotly.newPlot("bar", data, layout);
});

// Function bubblePlot

