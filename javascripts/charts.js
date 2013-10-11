
$(function () {
        $('#chart-fatturato').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Fatturato Ordinato Annuo'
            },
            subtitle: {
                text: 'Totale fatturato ogni mese nell\'ultimo anno di attività'
            },
            xAxis: {
                categories: [
                    'Gennaio',
                    'Febbraio',
                    'Marzo',
                    'Aprile',
                    'Maggio',
                    'Giugno',
                    'Luglio',
					'Agosto',
					'Settembre',
					'Ottobre',
					'Novembre',
					'Dicembre'
                ]
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 +'k';
                    }
                }
            },
            tooltip: {
				shared: true,
				useHTML: true,
				headerFormat: '{point.key}<table>',
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
				'<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
				footerFormat: '</table>',
				valueDecimals: 2
            },
            plotOptions: {
                area: {
					trackByArea: true,
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
			colors: ['rgba(80,180,50,0.9)', 'rgba(5,141,199,0.99)', '#275718', '#044561','#FF8800','#FF0800'],
            series: [
			{
                name: 'Cumulativo Anno Passato',
				fillOpacity: 0.3,
                data: [3931, 9389, 18763, 23150, 33094, 48079, 61023, 77512, 86444, 104937, 118882, 126365 ]
            },
			{
                name: 'Cumulativo Anno In Corso',
				fillOpacity: 0.3,
                data: [23957, 40905, 58388, 73346, 95289, 107223, 122180, 155165, 171208, 196166, 205639, 223973 ]
            },			
			{
                name: 'Per Mese Anno Passato',
				visible: false,
				fillOpacity: 0.3,
                data: [3931, 5458, 9374, 4387, 9944, 14985, 12944, 16489, 8932, 18493, 13945, 7483 ]
            },
			{
                name: 'Per Mese Anno In Corso',
				visible: false,
				fillOpacity: 0.3,
                data: [23957, 16948, 17483, 14958, 21943, 11934, 14957, 32985, 16043, 24958, 9473, 18334 ]
            },
			{
                name: 'Target Cumulativo Anno in Corso',
				visible: false,
				marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 1,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                },
				fillOpacity: 0.3,
                data: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000 ]
            },
			{
                name: 'Target Mensile Anno in Corso',
				visible: false,
				marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 1,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                },
				fillOpacity: 0.3,
                data: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000 ]
            }				
			
			]
        });
    });
    


$(function () {
        $('#chart-provvigioni').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Monte Provvigionale Annuo'
            },
            subtitle: {
                text: 'Totale provvigioni ogni mese nell\'ultimo anno di attività'
            },
            xAxis: {
 				categories: [
                    'Gennaio',
                    'Febbraio',
                    'Marzo',
                    'Aprile',
                    'Maggio',
                    'Giugno',
                    'Luglio',
					'Agosto',
					'Settembre',
					'Ottobre',
					'Novembre',
					'Dicembre'
                ]
            },
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 +'k';
                    }
                }
            },
            tooltip: {
				shared: true,
				useHTML: true,
				headerFormat: '{point.key}<table>',
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
				'<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
				footerFormat: '</table>',
				valueDecimals: 2
            },
            plotOptions: {
                area: {
					trackByArea: true,
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                },
            },
			colors: ['rgba(80,180,50,0.9)', 'rgba(5,141,199,0.99)', '#275718', '#044561','#FF8800','#FF0800'],
            series: [
			{
                name: 'Cumulativo Anno Passato',
				fillOpacity: 0.3,
				visible: false,
                data: [200, 600, 948, 1386, 2380, 3865, 6809, 8298, 9130, 11023, 12418, 13201 ]
            },
			{
                name: 'Cumulativo Anno In Corso',
				fillOpacity: 0.3,
				visible: false,
                data: [2397, 4045, 8528, 10986, 14129, 15863, 17820, 21105, 22748, 25246, 31719, 33553 ]
            },	
			{
                name: 'Per Mese Anno Passato',
				fillOpacity: 0.3,
                data: [200, 400, 348, 438, 994, 1485, 2944, 1489, 832, 1893, 1395, 783 ]
            },
			{
                name: 'Per Mese Anno In Corso',
				fillOpacity: 0.3,
                data: [2397, 1648, 4483, 2458, 3143, 1734, 1957, 3285, 1643, 2498, 6473, 1834 ]
            },	
			{
                name: 'Media Mensile Anno Passato',
				marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 1,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                },
				visible: false,
				fillOpacity: 0.3,
                data: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100 ]
            },
			{
                name: 'Media Mensile Anno In Corso',
				marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 1,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                },
				visible: false,
				fillOpacity: 0.3,
                data: [2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800 ]
            },
			{
			  name: 'Trend Anno in Corso',	
			  type: 'line',
			  visible: false,
			  marker: { enabled: false },
			  /* function returns data for trend-line */
			  data: (function() {
				return fitData([2397, 4045, 8528, 10986, 14129, 15863, 17820, 21105, 22748, 25246, 31719, 33553 ]).data;
			  })()
			},
			{
			  name: 'Trend Anno Passato',	
			  type: 'line',
			  visible: false,
			  marker: { enabled: false },
			  /* function returns data for trend-line */
			  data: (function() {
				return fitData([200, 600, 948, 1386, 2380, 3865, 6809, 8298, 9130, 11023, 12418, 13201 ]).data;
			  })()
			}
			
			]
        });
    });



$(function () {
	pieChart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-merci',
			type: 'pie',
			events: {
                redraw: function() {
                
                }
            }  
		},
		title: {
			text: 'Fatturato per Merceologie'
		},
		subtitle: {
			text: 'Dettaglio Fatturato per Categoria Merceologica'
		},
		yAxis: {
			title: {
				text: 'Faturato per categoria'
			}
		},
		plotOptions: {
			pie: {
				shadow: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.y +',00 EUR<br>';
			}
		},
		colors: ['#022433','#044561','#066891', 'rgb(5,141,199)', '#05ADF5', '#48C5FA',  'rgb(80,180,50)', '#FFF263', '#6AF9C4'],
		series: [{
			name: 'Categorie',
			data: [
					["Cancelleria",64888],
					["Promozionale",47321],
					["Tipografia",95478],
					["Mobili",14356],
					["Poltrone",24500],
					["Anti Infortunistica",1200],
					["Altro",120]
				  ],
			size: '99%',
			innerSize: '60%',
			showInLegend:true,
			dataLabels: {
				enabled: true,
				formatter: function() {
                        // display only if larger than 1
                        return '<b>'+ this.point.name +':</b> '+ this.y +',00 EUR' ;
                    }
			}
		}]
	});
	

	
});
	
	
	
$(function () {
	pieChart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-merci-provv',
			type: 'pie',
			events: {
                redraw: function() {
                
                }
            }  
		},
		title: {
			text: 'Provvigioni per Merceologie'
		},
		subtitle: {
			text: 'Dettaglio Provvigioni per Categoria Merceologica'
		},
		yAxis: {
			title: {
				text: 'Fatturato per categoria'
			}
		},
		plotOptions: {
			pie: {
				shadow: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.y +',00 EUR<br>';
			}
		},
		colors: ['#15300D','#275718','#398024', '#50B532', '#5DD439', '#69F540',  'rgb(5,141,199)', '#FFF263', '#6AF9C4'],
		series: [{
			name: 'Categorie',
			data: [
					["Cancelleria",6488],
					["Promozionale",7321],
					["Tipografia",5478],
					["Mobili",1456],
					["Poltrone",2450],
					["Anti Infortunistica",200],
					["Altro",10]
				  ],
			size: '99%',
			innerSize: '60%',
			showInLegend:true,
			dataLabels: {
				enabled: true,
				 formatter: function() {
                        // display only if larger than 1
                        return '<b>'+ this.point.name +':</b> '+ this.y +',00 EUR' ;
                    }
			}
		}]
	});
	

	
});
	
		

$(function () {
	pieChart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-canc',
			type: 'pie',
			events: {
                redraw: function() {
                
                }
            }  
		},
		title: {
			text: 'Fatturato da Cancelleria'
		},
		subtitle: {
			text: 'Dettaglio Fatturato per Cancelleria'
		},
		yAxis: {
			title: {
				text: 'Faturato per categoria'
			}
		},
		plotOptions: {
			pie: {
				shadow: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.y +',00 EUR<br>';
			}
		},
		series: [{
			name: 'Categorie',
			data: [
					["Carta",64888],
					["Archiviazine",47321],
					["Informatica",95478],
					["Accessori Scrivania",14356],
					["Accessori per Ufficio",1456],
					["Pulizia / AntiInfortunistica",24500],
					["Calcolatrici / Mobili",51200],
					["Articoli Scrittura",24500],
					["Toner / Cartucce",1200],
					["Articoli Scolastici",2120]
				  ],
			size: '99%',
			innerSize: '60%',
			showInLegend:true,
			dataLabels: {
				enabled: true,
				formatter: function() {
                        // display only if larger than 1
                        return '<b>'+ this.point.name +':</b> '+ this.y +',00 EUR' ;
                    }
			}
		}]
	});
	

	
});
	
	
	
$(function () {
	pieChart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart-canc-provv',
			type: 'pie',
			events: {
                redraw: function() {
                
                }
            }  
		},
		title: {
			text: 'Provvigioni da Cancelleria'
		},
		subtitle: {
			text: 'Dettaglio Provvigioni per Cancelleria'
		},
		yAxis: {
			title: {
				text: 'Provvigioni per categoria'
			}
		},
		plotOptions: {
			pie: {
				shadow: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.y +',00 EUR<br>';
			}
		},
		series: [{
			name: 'Categorie',
			data: [
					["Carta",6433],
					["Archiviazine",2856],
					["Informatica",7943],
					["Accessori Scrivania",2230],
					["Accessori per Ufficio",456],
					["Pulizia / AntiInfortunistica",4400],
					["Calcolatrici / Mobili",5120],
					["Articoli Scrittura",1345],
					["Toner / Cartucce",120],
					["Articoli Scolastici",270]
				  ],
			size: '99%',
			innerSize: '60%',
			showInLegend:true,
			dataLabels: {
				enabled: true,
			    formatter: function() {
                        // display only if larger than 1
                        return '<b>'+ this.point.name +':</b> '+ this.y +',00 EUR' ;
                    }
			}
		}]
	});
	

	
});
			
			
			
			
			

$(function () {
        $('#chart-clienti').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Clienti Gestiti'
            },
            subtitle: {
                text: 'Dettaglio del numero di clienti gestiti ogni mese nell\'ultimo anno di attività'
            },
            xAxis: {
                categories: [
                    'Gennaio',
                    'Febbraio',
                    'Marzo',
                    'Aprile',
                    'Maggio',
                    'Giugno',
                    'Luglio',
					'Agosto',
					'Settembre',
					'Ottobre',
					'Novembre',
					'Dicembre'
                ]
            },
            yAxis: {
                title: {
                    text: 'Fatturato Totale'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 +'k';
                    }
                }
            },
            tooltip: {
				shared: true,
				useHTML: true,
				headerFormat: '{point.key}<table>',
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
				'<td style="text-align: right"><b>{point.y}</b></td></tr>',
				footerFormat: '</table>',
				valueDecimals: 0
            },
            plotOptions: {
                area: {
					trackByArea: true,
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
			colors: ['#333','#aaa', 'rgb(5,141,199)', 'rgb(80,180,50)', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
            series: [{
                name: 'Totale Clienti Anno Passato',
				fillOpacity: 0.3,
                data: [4, 9, 5, 4, 8, 3, 4, 5, 3, 9, 7, 11 ]
            },
			{
                name: 'Nuovi Clienti Anno Passato',
				fillOpacity: 0.3,
                data: [3, 6, 4, 1, 2, 1, 3, 2, 1, 6, 5, 4 ]
            },
			{
                name: 'Totale Clienti Anno In Corso',
				fillOpacity: 0.3,
                data: [14, 12, 8, 10, 16, 4, 17, 5, 3, 8, 13, 19 ]
            },
			{
                name: 'Nuovi Clienti Anno In Corso',
				fillOpacity: 0.3,
                data: [1, 3, 1, 2, 4, 3, 1, 1, 3, 5, 4, 2 ]
            }
			
			]
        });
    });
    


$(function () {
        $('#chart-insoluto').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Incassato e Insoluto'
            },
            subtitle: {
                text: 'Totale Incassato e Insoluto ogni mese nell\'ultimo anno di attività'
            },
            xAxis: {
 				categories: [
                    'Gennaio',
                    'Febbraio',
                    'Marzo',
                    'Aprile',
                    'Maggio',
                    'Giugno',
                    'Luglio',
					'Agosto',
					'Settembre',
					'Ottobre',
					'Novembre',
					'Dicembre'
                ]
            },
            yAxis: {
                title: {
                    text: 'Provvigioni Totali'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 +'k';
                    }
                }
            },
            tooltip: {
				shared: true,
				useHTML: true,
				headerFormat: '{point.key}<table>',
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
				'<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
				footerFormat: '</table>',
				valueDecimals: 2
            },
            plotOptions: {
                area: {
					stacking: 'normal',
					trackByArea: true,
                    marker: {
                        enabled: true,
                        symbol: 'circle',
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                },
            },
			colors: ['#FF3700','rgba(5,141,199,0.99)', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
            series: [{
                name: 'Insoluto',
				fillOpacity: 0.3,
                data: [3937, 138, 4383, 2545, 3113, 1134, 1957, 2385, 0, 0, 2456, 3434 ]
            },
			{
                name: 'Incassato',
				fillOpacity: 0.3,
                data: [9937, 6438, 22483, 15458, 13143, 11734, 11957, 13285, 16493, 19998, 24763, 18534 ]
            }
			
			]
        });
    });
	
	
	
function doSparkLine() {
	
	
	$(".inlinesparkline").sparkline([23957, 16948, 17483, 14958, 21943, 11934, 14957, 32985, 16043, 24958, 9473, 18334], {
      type: "line",
      width: "80",
      height: "30",
      lineColor: "#adadad",
      fillColor: "rgba(244, 252, 225, 0.0)",
      lineWidth: 2,
      spotColor: "#909090",
      minSpotColor: "#909090",
      maxSpotColor: "#909090",
      highlightSpotColor: "#666",
      highlightLineColor: "#666",
      spotRadius: 0,
      chartRangeMin: 0
    });		
	

	$(".inlinesparkline2").sparkline([2397, 1648, 4483, 2458, 3143, 1734, 1957, 3285, 1643, 2498, 6473, 1834], {
      type: "line",
      width: "80",
      height: "30",
      lineColor: "#adadad",
      fillColor: "rgba(244, 252, 225, 0.0)",
      lineWidth: 2,
      spotColor: "#909090",
      minSpotColor: "#909090",
      maxSpotColor: "#909090",
      highlightSpotColor: "#666",
      highlightLineColor: "#666",
      spotRadius: 0,
      chartRangeMin: 0
    });	
	
	
$(".barsparkline").sparkline([16488,7321,5478,1456,2450,200,10], {
    type: 'bar',
    barWidth: 12,
    barColor: '#adadad'});
	
$(".cancBarsparkline").sparkline([64888, 47321, 95478, 14356, 1456, 24500, 51200, 24500, 1200, 2120], {
    type: 'bar',
    barWidth: 8,
    barColor: '#adadad'});
	
$(".cancBarsparkline2").sparkline([6433,2856,7943,2230,456,4400,5120,1345,120,270], {
    type: 'bar',
    barWidth: 8,
    barColor: '#adadad'});	
	
$('.compositebar').sparkline([1, 3, 1, 2, 4, 3, 1, 1, 3, 5, 4, 2], { type: 'bar',barWidth: 6, barColor: '#adadad' });
$('.compositebar').sparkline([14, 12, 8, 10, 16, 4, 17, 5, 3, 8, 13, 19 ],
{ composite: true, fillColor: false, lineColor: 'rgb(5,141,199)' });


$(".stakedsparkline").sparkline(['3937:3937', '138:6438', '4383:15458', '2545:13143', '3113:11734', '1134:11957', '1957:13285', '2385:16493', '0:19998', '0:24763', '2456:18538', '3434:29432'], {
    type: 'bar',
	stackedBarColor: '#adadad',
    barWidth: 6 });

};






