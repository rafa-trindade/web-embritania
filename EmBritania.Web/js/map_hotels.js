
$('#collapseMap_hotel').on('shown.bs.collapse', function (e) {
    (function (A) {

        if (!Array.prototype.forEach)
            A.forEach = A.forEach || function (action, that) {
                for (var i = 0, l = this.length; i < l; i++)
                    if (i in this)
                        action.call(that, this[i], i, this);
            };

    })(Array.prototype);



    var
    mapObject,
    markers = [],
    markersData = {
        'Hotel': [
        {
            name: 'Pousada da Ponte',
            location_latitude: -15.245775,
            location_longitude: -51.170471,
            map_image_url: '../storage/hotel/pousadadaponte/thumb-map.jpg',
            name_point: 'Pousada da Ponte',
            description_point: 'Sa&iacute;da para Aruan&atilde;.',
            get_directions_start_address: '',
            phone: '(061) 3383-1462',
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
            phone: '(062) 98557-2679',
            url_point: 'Detalhes/2?hospedagem=pousada-do-sim-o'
        }],

        'Camping': [
        {
            name: 'Camping Orla do Lago',
            location_latitude: -15.23980552,
            location_longitude: -51.16009667,
            map_image_url: '../storage/hotel/campingorladolago/thumb-map.jpg',
            name_point: 'Camping Orla do Lago',
            description_point: 'Espa&ccedil;o para Camping GRATUITO localizado na Orla do Lago dos Tigres.',
            get_directions_start_address: '',
            phone: '(062) 3383-1233',
            url_point: '#'
        }
        ]
    };

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-15.2440438, -51.1631422),
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
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scrollwheel: false,
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
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


    function hideAllMarkers() {
        for (var key in markers)
            markers[key].forEach(function (marker) {
                marker.setMap(null);
            });
    };

    function closeInfoBox() {
        $('div.infoBox').remove();
    };

    function getInfoBox(item) {
        return new InfoBox({
            content:
            '<div class="marker_info" id="marker_info">' +
            '<img src="' + item.map_image_url + '" alt="Image"/>' +
            '<h3>' + item.name_point + '</h3>' +
            '<span>' + item.description_point + '</span>' +
            '<div class="marker_tools">' +
            '<form action="http://maps.google.com/maps" method="get" target="_blank" style="display:inline-block""><input name="saddr" value="' + item.get_directions_start_address + '" type="hidden"><input type="hidden" name="daddr" value="' + item.location_latitude + ',' + item.location_longitude + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Como Chegar</button></form>' +
                '<a href="tel://' + item.phone + '" class="btn_infobox_phone">' + item.phone + '</a>' +
                '</div>' +
                '<a href="' + item.url_point + '" class="btn_infobox" style="margin-bottom: 15px;">Detalhes</a>' +
            '</div>',
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(10, 125),
            closeBoxMargin: '5px -20px 2px 2px',
            closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
            isHidden: false,
            alignBottom: true,
            pane: 'floatPane',
            enableEventPropagation: true
        });


    };

});