(function(A) {
	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
		    'Comercio': [
			{
				name: 'Panificadora Sol Nascente',
				location_latitude: -15.246347,
				location_longitude: -51.169281,
				map_image_url: '../img/thumb_map_fastfood_1.jpg',
				name_point: 'Panificadora Sol Nascente',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '(xx) xxxx-xxxx',
				url_point: '#'
			},
            {
                name: 'Kiel (Guia Tur&iacute;stico)',
                location_latitude: -15.23786144,
                location_longitude: -51.16048157,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Kiel (Guia Tur&iacute;stico)',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(xx) xxxx-xxxx',
                url_point: '#'
            },
            {
                name: 'Banco Bradesco S/A',
                location_latitude: -15.243487486794201,
                location_longitude: -51.16314768791199,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Banco Bradesco S/A',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(62) 3383-1129',
                url_point: '#'
            },
            {
                name: 'Casa Lot&eacute;rica Boa Sorte',
                location_latitude: -15.243611703146238,
                location_longitude: -51.16276144981384,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Casa Lot&eacute;rica Boa Sorte',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(62) 3383-1230',
                url_point: '#'
            },
            {
                name: 'Correios | Banco Postal',
                location_latitude: -15.246075312299244,
                location_longitude: -51.16452097892761,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Correios | Banco Postal',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(62) 3383-1141',
                url_point: '#'
            },
            {
                name: 'JP Pneus',
                location_latitude: -15.24608566,
                location_longitude: -51.17022336,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'JP Pneus',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(xx) xxxx-xxxx',
                url_point: '#'
            },
            {
                name: 'Novotok Cabeleleiros',
                location_latitude: -15.24162423,
                location_longitude: -51.16183341,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Novotok Cabeleleiros',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(xx) xxxx-xxxx',
                url_point: '#'
            },
            {
                name: 'Posto Brit&acirc;nia',
                location_latitude: -15.24289746,
                location_longitude: -51.16229475,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Posto Brit&acirc;nia',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(xx) xxxx-xxxx',
                url_point: '#'
            },
            {
                name: 'Posto',
                location_latitude: -15.24629269,
                location_longitude: -51.16982639,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Posto',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(xx) xxxx-xxxx',
                url_point: '#'
            },
            {
                name: 'Panificadora Millano',
                location_latitude: -15.24775221,
                location_longitude: -51.16768062,
                map_image_url: '../img/hoteis/2/thumb-map.jpg',
                name_point: 'Panificadora Millano',
                description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
                get_directions_start_address: '',
                phone: '(xx) xxxx-xxxx',
                url_point: '#'
            }

			]

		};

		var mapOptions = {
		    zoom: 16,
		    center: new google.maps.LatLng(-15.243487486794201, -51.16451025009155),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				 scrollwheel: false,
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.RIGHT_BOTTOM
				},
				styles: [
                                         {
                                             "featureType": "all",
                                             "stylers": [
                                                 {
                                                     "saturation": 0
                                                 },
                                                 {
                                                     "hue": "#e7ecf0"
                                                 }
                                             ]
                                         },
                                         {
                                             "featureType": "road",
                                             "stylers": [
                                                 {
                                                     "saturation": -70
                                                 }
                                             ]
                                         },
                                         {
                                             "featureType": "transit",
                                             "stylers": [
                                                 {
                                                     "visibility": "off"
                                                 }
                                             ]
                                         },
                                         {
                                             "featureType": "poi",
                                             "stylers": [
                                                 {
                                                     "visibility": "off"
                                                 }
                                             ]
                                         },
                                         {
                                             "featureType": "water",
                                             "stylers": [
                                                 {
                                                     "visibility": "simplified"
                                                 },
                                                 {
                                                     "saturation": -60
                                                 }
                                             ]
                                         }
				]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: '../img/pins/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

					
				});
				

	

		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};
		
		function toggleMarkers (category) {
			hideAllMarkers();
			closeInfoBox();

			if ('undefined' === typeof markers[category])
				return false;
			markers[category].forEach(function (marker) {
				marker.setMap(mapObject);
				marker.setAnimation(google.maps.Animation.DROP);

			});
		};

		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
        '<div class="marker_info_2" style="height:120px; width:250px; padding-top:1px">' +
        //'<img src="' + item.map_image_url + '" alt="Image"/>' +
        '<h3>' + item.name_point + '</h3>' +
        //'<span>' + item.description_point + '</span>' +
        '<div class="marker_tools">' +
        '<form action="http://maps.google.com/maps" method="get" target="_blank" style="display:inline-block""><input name="saddr" value="' + item.get_directions_start_address + '" type="hidden"><input type="hidden" name="daddr" value="' + item.location_latitude + ',' + item.location_longitude + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Como Chegar</button></form>' +
            '<a href="tel://' + item.phone + '" class="btn_infobox_phone">' + item.phone + '</a>' +
            '</div>' +
        '</div>',
				disableAutoPan: false,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(18, 33),
				closeBoxMargin: '5px -20px 2px 2px',
				closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
				isHidden: false,
				alignBottom: true,
				pane: 'floatPane',
				enableEventPropagation: true
			});
		};
		
		function onHtmlClick(location_type, key){
     google.maps.event.trigger(markers[location_type][key], "click");
}