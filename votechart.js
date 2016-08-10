var chart;

function initializeChart() {
	var chartProperties = {
		title:{
			text: "Images selected for Bus Mall"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: imageOptions
		}
		]
	};
	chart = new CanvasJS.Chart("chart-container", chartProperties);
	chart.render();
}

//window.addEventListener("load", initializeChart);