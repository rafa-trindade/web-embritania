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

		    'Evento': [
                {
                    name: 'I COPA RIVADAVIA JAIME',
                    location_latitude: -15.236511,
                    location_longitude: -51.163639,
                    map_image_url: '../img/thumb_map_1.jpg',
                    name_point: 'I COPA RIVADAVIA JAIME',
                    description_point: 'Sa&iacute;da para Aruan&atilde;.',
                    get_directions_start_address: '',
                    phone: '(62) 3383-1233',
                    url_point: '#'
                },
                {
                    name: 'BALADA F-250 | TRIBO DA PERIFERIA',
                    location_latitude: -15.25328,
                    location_longitude: -51.170701,
                    map_image_url: '../img/thumb_map_1.jpg',
                    name_point: 'BALADA F-250 | TRIBO DA PERIFERIA',
                    description_point: 'Em frente ao Lago dos Tigres.',
                    get_directions_start_address: '',
                    phone: '(66) 9 9232-5205',
                    url_point: '#'
                },
                {
                    name: 'FEIRINHA DE ALIMENTAÇÃO',
                    location_latitude: -15.250795,
                    location_longitude: -51.172031,
		            map_image_url: '../img/thumb_map_1.jpg',
		            name_point: 'FEIRINHA DE ALIMENTAÇÃO',
		            description_point: 'Sa&iacute;da para Aruan&atilde;.',
		            get_directions_start_address: '',
		            phone: '(62) 3383-1233',
		            url_point: '#'
                }
		    ],



            'Hotel2': [
                {
                    name: 'Pousada da Ponte',
                    location_latitude: -15.245775,
                    location_longitude: -51.170471,
                    map_image_url: '../storage/hotel/pousadadaponte/thumb-map.jpg',
                    name_point: 'Pousada da Ponte',
                    description_point: 'Sa&iacute;da para Aruan&atilde;.',
                    get_directions_start_address: '',
                    phone: '(62) 3383-1462',
                    url_point: 'Detalhes/1?hospedagem=pousada-da-ponte'
                },
                {
                    name: 'Pousada do Sim&atilde;o',
                    location_latitude: -15.23801675,
                    location_longitude: -51.1610717,
                    map_image_url: '../storage/hotel/pousadadosimao/thumb-map.jpg',
                    name_point: 'Pousada do Sim&atilde;o',
                    description_point: 'Em frente ao Lago dos Tigres.',
                    get_directions_start_address: '',
                    phone: '(62) 98557-2679',
                    url_point: 'Detalhes/2?hospedagem=pousada-do-sim-o'
                }//,
                //{
                //    name: "Cabana's São Pedro (Hotel)",
                //    location_latitude: -15.24115122,
                //    location_longitude: -51.15815475,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Cabana's São Pedro (Hotel)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: "Portal do Sol (Pousada)",
                //    location_latitude: -15.24332963,
                //    location_longitude: -51.16296798,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Portal do Sol (Pousada)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: "Cl&aacute;udio's (Hotel)",
                //    location_latitude: -15.2437178,
                //    location_longitude: -51.16324693,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Cl&aacute;udio's (Hotel)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: "Recanto das &Aacute;guas (Hotel)",
                //    location_latitude: -15.25300018,
                //    location_longitude: -51.14692569,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Recanto das &Aacute;guas (Hotel)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //}
			],



            'Camping': [
                {
                    name: 'Camping Orla do Lago',
                    location_latitude: -15.240009,
                    location_longitude: -51.159709,
                    map_image_url: '../storage/hotel/campingorladolago/thumb-map.jpg',
                    name_point: 'Camping Orla do Lago',
                    description_point: 'Espa&ccedil;o para Camping GRATUITO localizado na Orla do Lago dos Tigres.',
                    get_directions_start_address: '',
                    phone: '(062) 3383-1233',
                    url_point: '#'
                }
            ],


			'ComidaBebida': [
                {
                    name: 'Fim de Tarde da Tia Lila (Restaurante)',
                    location_latitude: -15.2410684,
                    location_longitude: -51.16006449,
                    map_image_url: '../img/thumb_map_1.jpg',
                    name_point: 'Fim de Tarde da Tia Lila (Restaurante)',
                    description_point: '',
                    get_directions_start_address: '',
                    phone: ' (62) 3383-1117',
                    url_point: '#'
                },
                {
                    name: 'P&ocirc;r do Sol (Restaurante)',
                    location_latitude: -15.23871416,
                    location_longitude: -51.16072431,
                    map_image_url: '../img/thumb_map_1.jpg',
                    name_point: 'P&ocirc;r do Sol (Restaurante)',
                    description_point: '',
                    get_directions_start_address: '',
                    phone: '(xx) xxxx-xxxx',
                    url_point: '#'
                },
                //{
                //    name: 'Ana Maria (Restaurante)',
                //    location_latitude: -15.2488339,
                //    location_longitude: -51.16697252,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: 'Ana Maria (Restaurante)',
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: 'Panela de Ferro (Restaurante)',
                //    location_latitude: -15.23940125,
                //    location_longitude: -51.16317719,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: 'Panela de Ferro (Restaurante)',
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: "Cl&aacute;udio's (Restaurante)",
                //    location_latitude: -15.2437178,
                //    location_longitude: -51.16324693,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Cl&aacute;udio's (Restaurante)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: 'Virou Bahia (Lanchonete)',
                //    location_latitude: -15.247111468684624,
                //    location_longitude: -51.16569444537163,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: 'Virou Bahia (Lanchonete)',
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: "Gugas's Lanche (Lanchonetes)",
                //    location_latitude: -15.24007668,
                //    location_longitude: -51.16066396,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Gugas's Lanche (Lanchonetes)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: "Mega Lanches (Lanchonetes)",
                //    location_latitude: -15.246968104707602,
                //    location_longitude: -51.165569722652435,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: "Mega Lanches (Lanchonetes)",
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                {
                    name: 'Kiel (Bar e Guia Turístico)',
                    location_latitude: -15.23786144,
                    location_longitude: -51.16048157,
                    map_image_url: '../img/thumb_map_1.jpg',
                    name_point: 'Kiel (Bar e Guia Turístico)',
                    description_point: '',
                    get_directions_start_address: '',
                    phone: ' (62) 98482-4359',
                    url_point: '#'
                }//,
                //{
                //    name: 'Ranch&atilde;o (Bar)',
                //    location_latitude: -15.23591533,
                //    location_longitude: -51.15994513,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: 'Ranch&atilde;o (Bar)',
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //},
                //{
                //    name: 'Pier 27 (Bar)',
                //    location_latitude: -15.24080129,
                //    location_longitude: -51.15900099,
                //    map_image_url: '../img/thumb_map_1.jpg',
                //    name_point: 'Pier 27 (Bar)',
                //    description_point: '',
                //    get_directions_start_address: '',
                //    phone: '(xx) xxxx-xxxx',
                //    url_point: '#'
                //}
			],



        'Turismo': [
			{
			    name: 'Lago dos Tigres',
			    location_latitude: -15.238519,
			    location_longitude: -51.159607,
				map_image_url: '../img/thumb_map_1.jpg',
				name_point: 'Lago dos Tigres',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '(xx) xxxx-xxxx',
				url_point: 'single_tour.html'
			},
			{
			    name: 'Praia Bonita',
			    location_latitude: -15.23649,
			    location_longitude: -51.159698,
				map_image_url: '../img/thumb_map_1.jpg',
				name_point: 'Praia Bonita',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
				get_directions_start_address: '',
				phone: '(xx) xxxx-xxxx',
				url_point: 'single_tour.html'
			},
			{
			    name: 'Cristo',
			    location_latitude: -15.239554,
			    location_longitude: -51.160015,
			    map_image_url: '../img/thumb_map_1.jpg',
			    name_point: 'Cristo',
			    description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			    get_directions_start_address: '',
			    phone: '(xx) xxxx-xxxx',
			    url_point: 'single_tour.html'
			},
			{
			    name: 'Praias (Araguaia)',
			    location_latitude: -15.174153,
			    location_longitude: -51.157228,
			    map_image_url: '../img/thumb_map_1.jpg',
			    name_point: 'Praias (Araguaia)',
			    description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			    get_directions_start_address: '',
			    phone: '(xx) xxxx-xxxx',
			    url_point: 'single_tour.html'
			},
			{
			    name: 'Rio Vermelho',
			    location_latitude: -15.223115,
			    location_longitude: -51.166227,
			    map_image_url: '../img/thumb_map_1.jpg',
			    name_point: 'Rio Vermelho',
			    description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			    get_directions_start_address: '',
			    phone: '(xx) xxxx-xxxx',
			    url_point: 'single_tour.html'
			},
			{
			    name: 'Tigrinho',
			    location_latitude: -15.242163,
			    location_longitude: -51.175153,
			    map_image_url: '../img/thumb_map_1.jpg',
			    name_point: 'Tigrinho',
			    description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			    get_directions_start_address: '',
			    phone: '(xx) xxxx-xxxx',
			    url_point: 'single_tour.html'
			},
			{
			    name: 'Ponte do Itacaiu',
			    location_latitude: -15.173273,
			    location_longitude: -51.156839,
			    map_image_url: '../img/thumb_map_1.jpg',
			    name_point: 'Museu',
			    description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			    get_directions_start_address: '',
			    phone: '(xx) xxxx-xxxx',
			    url_point: 'single_tour.html'
			}
        ]

		};

			var mapOptions = {
			    zoom: 16,
			    center: new google.maps.LatLng(-15.2440438, -51.1631422),
			    mapTypeId: google.maps.MapTypeId.SATELLITE,

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
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				 scrollwheel: false,
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				styles: [
											 {
					"featureType": "landscape",
					"stylers": [
						{
							"hue": "#FFBB00"
						},
						{
							"saturation": 43.400000000000006
						},
						{
							"lightness": 37.599999999999994
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{
							"hue": "#FFC200"
						},
						{
							"saturation": -61.8
						},
						{
							"lightness": 45.599999999999994
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{
							"hue": "#FF0300"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 51.19999999999999
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
						{
							"hue": "#FF0300"
						},
						{
							"saturation": -100
						},
						{
							"lightness": 52
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{
							"hue": "#0078FF"
						},
						{
							"saturation": -13.200000000000003
						},
						{
							"lightness": 2.4000000000000057
						},
						{
							"gamma": 1
						}
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{
							"hue": "#00FF6A"
						},
						{
							"saturation": -1.0989010989011234
						},
						{
							"lightness": 11.200000000000017
						},
						{
							"gamma": 1
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