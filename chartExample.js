var chart;  //global, so can call anywhere
var fruitInfo = [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  },
				{ label: "pine",  y: 17   }
];

function initializeChart() {
	var chartProperties = {
	 
		title:{
			text: "My First Chart in CanvasJS"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: fruitInfo
		}
		]
	};
	chart = new CanvasJS.Chart("chart-container", chartProperties); //object literal
	chart.render();  //draws the chart
}

 window.addEventListener("load", initializeChart);