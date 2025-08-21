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
    'Restaurante': [
        {
            name: 'Fim de Tarde da Tia Lila (Restaurante)',
            location_latitude: -15.2410684,
            location_longitude: -51.16006449,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: 'Fim de Tarde da Tia Lila (Restaurante)',
            get_directions_start_address: '',
            phone: '(62) 3383-1117',
            url_point: '#'
        },
        {
            name: 'P&ocirc;r do Sol (Restaurante)',
            location_latitude: -15.23871416,
            location_longitude: -51.16072431,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: 'P&ocirc;r do So (Restaurante)',
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: 'Ana Maria (Restaurante)',
            location_latitude: -15.2488339,
            location_longitude: -51.16697252,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: 'Ana Maria (Restaurante)',
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: 'Panela de Ferro (Restaurante)',
            location_latitude: -15.23940125,
            location_longitude: -51.16317719,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: 'Panela de Ferro (Restaurante)',
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: "Cl&aacute;udio's (Restaurante)",
            location_latitude: -15.2437178,
            location_longitude: -51.16324693,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: "Cl&aacute;udio's (Restaurante)",
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        }

    ],

    'Lanchonete': [
        {
            name: 'Virou Bahia (Lanchonete)',
            location_latitude: -15.247111468684624,
            location_longitude: -51.16569444537163,
            map_image_url: '../img/restaurante/tialila/thumb-map.jpg',
            name_point: 'Virou Bahia (Lanchonete)',
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: "Gugas's Lanche (Lanchonete)",
            location_latitude: -15.24007668,
            location_longitude: -51.16066396,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: "Gugas's Lanche (Lanchonete)",
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: "Mega Lanches (Lanchonete)",
            location_latitude: -15.246968104707602,
            location_longitude: -51.165569722652435,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: "Mega Lanches (Lanchonete)",
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: "Pais & Filhos (Lanchonete)",
            location_latitude: -15.246585,
            location_longitude: -51.165284,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: "Pais & Filhos (Lanchonete)",
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        },
        {
            name: "JB Mundial Lanches (Lanchonete)",
            location_latitude: -15.246497,
            location_longitude: -51.165217,
            map_image_url: '../img/hoteis/2/thumb-map.jpg',
            name_point: "JB Mundial Lanches (Lanchonete)",
            description_point: '',
            get_directions_start_address: '',
            phone: '(xx) xxxx-xxxx',
            url_point: '#'
        }
    ],

    'Bar': [
    {
        name: 'Kiel (Bar e Guia Tur&iacute;stico)',
        location_latitude: -15.23786144,
        location_longitude: -51.16048157,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Kiel (Bar e Guia Tur&iacute;stico)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        get_directions_start_address: '',
        phone: '(xx) xxxx-xxxx',
        url_point: '#'
    },
    {
        name: 'Ranch&atilde;o (Bar)',
        location_latitude: -15.23591533,
        location_longitude: -51.15994513,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Ranch&atilde;o (Bar)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        get_directions_start_address: '',
        phone: '(xx) xxxx-xxxx',
        url_point: '#'
    },
    {
        name: 'Pier 27 (Bar)',
        location_latitude: -15.24080129,
        location_longitude: -51.15900099,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Pier 27 (Bar)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        get_directions_start_address: '',
        phone: '(xx) xxxx-xxxx',
        url_point: '#'
    }
    ]


};

var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(-15.24233641164817, -51.16451025009155),
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




function hideAllMarkers() {
    for (var key in markers)
        markers[key].forEach(function (marker) {
            marker.setMap(null);
        });
};

function toggleMarkers(category) {
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

function onHtmlClick(location_type, key) {
    google.maps.event.trigger(markers[location_type][key], "click");
}