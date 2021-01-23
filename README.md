# Interactive-Visualizations-and-Dashboards-Challenge

In this assignment, building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Step 1: Plotly

1.1 Use the D3 library to read in samples.json.
1.2 Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
	1.2.a Use sample_values as the values for the bar chart.
	1.2.b Use otu_ids as the labels for the bar chart.
	1.2.c Use otu_labels as the hovertext for the chart.

1.3 Create a bubble chart that displays each sample.
	1.3.a Use otu_ids for the x values.
	1.3.b Use sample_values for the y values.
	1.3.c Use sample_values for the marker size.
	1.3.d Use otu_ids for the marker colors.
	1.3.e Use otu_labels for the text values.

1.4 Display the sample metadata, i.e., an individual's demographic information.


1.5 Display each key-value pair from the metadata JSON object somewhere on the page.

1.6 Update all of the plots any time that a new sample is selected.
