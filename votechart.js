var chart;

function initializeChart() {
	var chartProperties = {
		title:{
			text: "My First Chart in CanvasJS"
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