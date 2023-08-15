	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#agdebtnRun').click(function() {
		console.log($('input[name="latitude"]').val());
		console.log($('input[name="longitude"]').val());
		$.ajax({
			url: "libs/php/getagde.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#latitude').val(),
				longitude: $('#longitude').val()
			},
			success: function(result) {

				console.log(JSON.stringify(result));
				var res = 'No Data';
				if (result.status.name == "ok") {
					if (result['data']['astergdem']) {
						res = result
					}
					console.log(result);
					$('#result').html(res);
					$('#latitude').val('');
					$('#longitude').val('');
				}
				else {
					$('#result').html(res);
					$('#latitude').val('');
					$('#longitude').val('');
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown);
				console.log(jqXHR);
				console.log(textStatus);
			}
		}); 
	
	});

	$('#childrenbtnRun').click(function() {
		$.ajax({
			url: "libs/php/getChildren.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#geonameId').val(),
				hierarchy: $('#selHierarchy').val(),
				maxRows: $('#selMaxrows').val()
			},
			success: function (result) {
				console.log(JSON.stringify(result));
				var res = 'No Data';
				if (result.status.name == "ok") {
					var list = "";
					result['data']['geonames'].forEach((geoname, i) => {
						if (i === 0 || i === result['data']['geonames'].length - 1) {
							console.log(i);
							list += geoname['toponymName'];
						} else {
							list += geoname['toponymName'] + ', ';
						}
					});
					if (list) {
						res = list;
					}
					$('#result').html('<div><p>' + res + '<p></div>');
				} else {
					$('#result').html('<div><p>' + res + '<p></div>');
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown);
				console.log(jqXHR);
				console.log(textStatus);
			}
		}); 
	
	});

	$('#containsbtnRun').click(function() {
		$.ajax({
			url: "libs/php/getContains.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameId: $('#congeonameId').val()
			},
			success: function(result) {
				console.log(JSON.stringify(result));
				var res = 'No Data';
				if (result.status.name == "ok") {
					console.log(result);
					var list = "";
					result['data']['geonames'].forEach((geoname, i) => {
						if (i === 0 || i === result['data']['geonames'].length - 1) {
							console.log(i);
							list += geoname['toponymName'];
						} else {
							list += geoname['toponymName'] + ', ';
						}
					});
					if (list) {
						res = list;
					}
					$('#result').html('<div><p>'+ res + '</p></div>');
				} else {
					$('#result').html('<div><p>' + res + '</p></div>');
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown);
				console.log(jqXHR);
				console.log(textStatus);
			}
		}); 
	
	});
	$('#countryCodebtnRun').click(function() {
		console.log($('input[name="cclatitude"]').val());
		console.log($('input[name="cclongitude"]').val());
		$.ajax({
			url: "libs/php/getcountryCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#cclatitude').val(),
				longitude: $('#cclongitude').val()
			},
			success: function (result) {
				var res = 'No Data';
				console.log(JSON.stringify(result));
				if (result.status.name == "ok") {
					console.log(result);
					if (result['data']['countryCode'] || result['data']['countryName']) {
						res = result['data']['countryCode'] + ', ' + result['data']['countryName'];
					}
					$('#result').html(res);
					$('#cclatitude').val('');
					$('#cclongitude').val('');
				}
				else {
					$('#result').html(res);
					$('#cclatitude').val('');
					$('#cclongitude').val('');
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown);
				console.log(jqXHR);
				console.log(textStatus);
			}
		}); 
	
	});
	$('#oceanbtnRun').click(function() {
		console.log($('input[name="oclatitude"]').val());
		console.log($('input[name="oclongitude"]').val());
		$.ajax({
			url: "libs/php/getOcean.php",
			type: 'POST',
			dataType: 'json',
			data: {
				latitude: $('#oclatitude').val(),
				longitude: $('#oclongitude').val()
			},
			success: function(result) {
				console.log(JSON.stringify(result));
				var res = 'No Data';
				if (result.status.name == "ok") {
					console.log(result);
					if (result['data']['ocean']['name']) {
						res = 'Ocean : ' + result['data']['ocean']['name'] + ' ,GeoNameId : ' + result['data']['ocean']['geonameId'];
					}
					$('#result').html(res);
					$('#oclatitude').val('');
					$('#oclongitude').val('');
				}
				else {
					$('#result').html(res);
					$('#oclatitude').val('');
					$('#oclongitude').val('');					
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown);
				console.log(jqXHR);
				console.log(textStatus);
			}
		}); 
	});