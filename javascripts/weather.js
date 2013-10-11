var icona,tempo;

$(document).ready(function(){
	
	var provincia = $('#select-provincia-tempo').val();
	
	previsioniMeteo(provincia);
	
$('#select-provincia-tempo').bind("change", function() {
		
			var provincia = $('#select-provincia-tempo').val();
			$("#weathertest").html("");
			$("#domani1").html("");
			$("#domani2").html("");
			$("#domani3").html("");
			$("#domani4").html("");
	
	        previsioniMeteo(provincia);
		
	});
	
	
});


	
function previsioniMeteo(provincia) {	

	$.simpleWeather({
				zipcode: '',
				woeid: provincia,
				location: '',
				unit: 'c',
				success: function(simpleweather) {

					swichTempo(simpleweather.codice);
					
/*
					var clearday = ['28','32','34','36'];
					var clearnight = ['27','31','33'];
					var partlycloudyday = ['30','44','3200'];
					var partlycloudynight = ['29'];
					var cloudy = ['26'];
					var rain = ['8','9','10','11','12','40'];
					var sleet = ['0','1','2','3','4','17','37','38','39','45','47'];
					var snow = ['5','6','7','13','14','15','16','18','35','41','42','43','46'];
					var wind = ['23','24','25'];
					var fog = ['19','20','21','22'];
					
					var tempo = "";
					
					if(isInArray(simpleweather.codice,clearday)) { tempo = "CLEAR_DAY"; }
					else if(isInArray(simpleweather.codice,clearnight)) { tempo = "CLEAR_NIGHT"; }
					else if(isInArray(simpleweather.codice,partlycloudyday)) { tempo = "PARTLY_CLOUDY_DAY"; }
					else if(isInArray(simpleweather.codice,partlycloudynight)) { tempo = "PARTLY_CLOUDY_NIGHT"; }
					else if(isInArray(simpleweather.codice,cloudy)) { tempo = "CLOUDY"; }
					else if(isInArray(simpleweather.codice,rain)) { tempo = "RAIN"; }
					else if(isInArray(simpleweather.codice,sleet)) { tempo = "SLEET"; }
					else if(isInArray(simpleweather.codice,snow)) { tempo = "SNOW"; }
					else if(isInArray(simpleweather.codice,wind)) { tempo = "WIND"; }
					else if(isInArray(simpleweather.codice,fog)) { tempo = "FOG"; }
					
					                  <div class="number">
                    72<small>&deg;</small>
                  </div>
*/
					//html = '<h2>'+simpleweather.city+', '+simpleweather.codice+'</h2>';
					html = '<canvas id="'+tempo+'" height="100" width="100" data-skycons="'+icona+'" class="tempo-element"></canvas>';
					html += '<div class="number">'+simpleweather.temp+'<small>&deg;</small></div><br>'+tempo+' ';
					html += '<a TARGET="_blank" href="'+simpleweather.link+'"> &raquo; </a>';
				 
				$("#weathertest").html(html);
					
					var dom1,dom2,dom3,dom4,d1,d2,d3,d4;
					var data=new Date();
					var oggi=data.getDay();
				    var nomi_giorni=new Array("DOMENICA","LUNEDI'","MARTEDI'","MERCOLEDI'","GIOVEDI'","VENERDI'","SABATO","DOMENICA","LUNEDI'","MARTEDI'","MERCOLEDI'","GIOVEDI'","VENERDI'","SABATO");
					
			
						d1 = oggi+1;
						d2 = oggi+2;
						d3 = oggi+3;
						d4 = oggi+4;

					
					dom1 = nomi_giorni[d1];
					dom2 = nomi_giorni[d2];
					dom3 = nomi_giorni[d3];
					dom4 = nomi_giorni[d4];
					
					
					
					swichTempo(simpleweather.tomorrow.code);
					
					
					html  = '<p>'+dom1+'</p>';
					html += '<canvas class="tempo-element" data-skycons="'+icona+'" height="60" id="'+icona+Math.floor(Math.random()*9999)+'0" width="60"></canvas>';
					html += "<div class=\"number\">"+simpleweather.tomorrow.high+"<small>&deg;</small></div>";
  					
					$("#domani1").html(html);
					
					
					
					swichTempo(simpleweather.domani2.code);

					html  = '<p>'+dom2+'</p>';
					html += '<canvas class="tempo-element" data-skycons="'+icona+'" height="60" id="'+icona+Math.floor(Math.random()*9999)+'1" width="60"></canvas>';
					html += "<div class=\"number\">"+simpleweather.domani2.high+"<small>&deg;</small></div>";
  					
					$("#domani2").html(html);
					
					//alert(html);
					
					swichTempo(simpleweather.domani3.code);

					html  = '<p>'+dom3+'</p>';
					html += '<canvas class="tempo-element" data-skycons="'+icona+'" height="60" id="'+icona+Math.floor(Math.random()*9999)+'2" width="60"></canvas>';
					html += "<div class=\"number\">"+simpleweather.domani3.high+"<small>&deg;</small></div>";
  					
					$("#domani3").html(html);
					
					swichTempo(simpleweather.domani4.code);

					html  = '<p>'+dom4+'</p>';
					html += '<canvas class="tempo-element" data-skycons="'+icona+'" height="60" id="'+icona+Math.floor(Math.random()*9999)+'3" width="60"></canvas>';
					html += "<div class=\"number\">"+simpleweather.domani4.high+"<small>&deg;</small></div>";
  					
					$("#domani4").html(html);
				
				 $('.tempo-element').each(function() {
					  var canvasId, skycons, weatherSetting;
					  skycons = new Skycons({
						color: "white"
					  });
					  canvasId = $(this).attr('id');
					  weatherSetting = $(this).data('skycons');
					  skycons.add(canvasId, Skycons[weatherSetting]);
					  return skycons.play();
					});

			},
		error: function(error) {
			$("#weathertest").html('<p>'+error+'</p>');
		}
	});

};

function isInArray(value, array) {
  return array.indexOf(value) > -1 ? true : false;
}

function swichTempo(codice) {
	
					switch(codice) {
						case '0':  tempo = "Tornado"; icona = "SLEET"; break;
						case '1':  tempo = "Tempesta Tropicale"; icona = "SLEET"; break;
						case '2':  tempo = "Uragano"; icona = "SLEET"; break;
						case '3':  tempo = "Forti Temporali"; icona = "SLEET"; break;
						case '4':  tempo = "Temporali"; icona = "SLEET"; break;
						case '5':  tempo = "Pioggia Mista e Neve"; icona = "SNOW"; break;
						case '6':  tempo = "Pioggia Mista e Nevischio"; icona = "SNOW"; break;
						case '7':  tempo = "Neve e Nevischio Misto"; icona = "SNOW"; break;
						case '8':  tempo = "Pioggerella Gelata"; icona = "RAIN"; break;
						case '9':  tempo = "Pioggerela"; icona = "RAIN"; break;
						case '10': tempo = "Pioggia Gelida"; icona = "RAIN"; break;
						case '11': tempo = "Rovesci"; icona = "SLEET"; break;
						case '12': tempo = "Rovesci"; icona = "SLEET"; break;
						case '13': tempo = "Raffiche di Neve"; icona = "SNOW"; break;
						case '14': tempo = "Nevicate Leggere"; icona = "SNOW"; break;
						case '15': tempo = "Nevischio"; icona = "SNOW"; break;
						case '16': tempo = "Nevicate"; icona = "SNOW"; break;
						case '17': tempo = "Grandine"; icona = "RAIN"; break;
						case '18': tempo = "Nevischio"; icona = "SNOW"; break;
						case '19': tempo = "Spolverate di neve"; icona = "SNOW"; break;
						case '20': tempo = "Nebbia Pesante"; icona = "FOG"; break;
						case '21': tempo = "Nebbia Leggera"; icona = "FOG"; break;
						case '22': tempo = "Scarsa Visibilità"; icona = "FOG"; break;
						case '23': tempo = "Ventoso"; icona = "WIND"; break;
						case '24': tempo = "Ventoso"; icona = "WIND"; break;
						case '25': tempo = "Freddo"; icona = "WIND"; break;
						case '26': tempo = "Nuvoloso"; icona = "CLOUDY"; break;
						case '27': tempo = "Molto Nuvoloso"; icona = "PARTLY_CLOUDY_NIGHT"; break;
						case '28': tempo = "Molto Nuvoloso"; icona = "PARTLY_CLOUDY_DAY"; break;
						case '29': tempo = "Poco Nuvoloso"; icona = "PARTLY_CLOUDY_NIGHT"; break;
						case '30': tempo = "Poco Nuvoloso"; icona = "PARTLY_CLOUDY_DAY"; break;
						case '31': tempo = "Sereno"; icona = "CLEAR_DAY"; break;
						case '32': tempo = "Soleggiato"; icona = "CLEAR_DAY"; break;
						case '33': tempo = "Sereno"; icona = "CLEAR_DAY"; break;
						case '34': tempo = "Sereno"; icona = "CLEAR_DAY"; break;
						case '35': tempo = "Pioggia e Grandine"; icona = "RAIN"; break;
						case '36': tempo = "Caldo"; icona = "CLEAR_DAY"; break;
						case '37': tempo = "Isolati Temporali"; icona = "RAIN"; break;
						case '38': tempo = "Possibili Temporali"; icona = "SLEET"; break;
						case '39': tempo = "Possibili Temporali"; icona = "SLEET"; break;
						case '40': tempo = "Possibili Piogge"; icona = "RAIN"; break;
						case '41': tempo = "Forti Nevicate"; icona = "SNOW"; break;
						case '42': tempo = "Possibili Nevicate"; icona = "SNOW"; break;
						case '43': tempo = "Forti Nevicate"; icona = "SNOW"; break;
						case '44': tempo = "Parziamente Nuvoloso"; icona = "PARTLY_CLOUDY_DAY"; break;
						case '45': tempo = "Temporali"; icona = "SLEET"; break;
						case '46': tempo = "Nevicate"; icona = "SNOW"; break;
						case '47': tempo = "Isolati Rovesci"; icona = "RAIN"; break;
						default:   tempo = "Non Disponibile"; icona = "PARTLY_CLOUDY_DAY"; break;
						}

};

