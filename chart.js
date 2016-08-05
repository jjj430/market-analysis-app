var chart;  //global, so can call anywhere
var fruitInfo = [
				{ label: "Banana",      y: 10  },
				{ label: "Bag",         y: 15  },
				{ label: "Boots",       y: 25  },
				{ label: "Chair",       y: 30  },
				{ label: "Cthulhu",     y: 28  },
				{ label: "Dragon",      y: 17   },
				{ label: "Pen",         y: 17   },
				{ label: "Scissors",    y: 17   },
				{ label: "Shark",       y: 17   },
				{ label: "Sweep",       y: 17   },
				{ label: "Unicorn",     y: 17   },
				{ label: "USB",         y: 17   },
				{ label: "Water Can",   y: 17   },
				{ label: "Wine Glass",  y: 17   }
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