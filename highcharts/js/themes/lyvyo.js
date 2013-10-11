/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
	colors: ['rgba(80,180,50,0.9)', 'rgba(5,141,199,0.99)', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: '#fff',
		borderWidth: 0,
		plotBackgroundColor: '#FFF',
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#09ADDC',
			font: 'bold 22px "Quicksand", sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#aaaaaa',
			font: 'bold 14px "Quicksand", sans-serif',
			lineheight: '16px'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#aaaaaa',
		tickColor: '#aaaaaa',
		labels: {
			style: {
				color: '#aaaaaa',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#aaaaaa',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'

			}
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		lineColor: '#aaa',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#aaa',
		labels: {
			style: {
				color: '#aaa',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#aaa',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: '#333'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},

	navigation: {
		buttonOptions: {
			theme: {
				stroke: '#CCCCCC'
			}
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
