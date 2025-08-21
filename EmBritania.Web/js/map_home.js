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
        name: 'Pousada da Ponte (Pousada)',
        location_latitude: -15.245775,
        location_longitude: -51.170471,
        map_image_url: '../storage/hotel/pousadadaponte/thumb-map.jpg',
        name_point: 'Pousada da Ponte (Pousada)',
        description_point: 'Localizada na saída para Arunã. A Pousada da Ponte oferece um ambiente familiar e atendimento amigo. Ideal para quem deseja uma estadia tranquila para usurfruir o melhor de Britânia.',
        url_point: 'Detalhes/1?hospedagem=pousada-da-ponte'
    },
    {
        name: 'Pousada do Simão (Pousada)',
        location_latitude: -15.23801675,
        location_longitude: -51.1610717,
        map_image_url: '../storage/hotel/pousadadosimao/thumb-map.jpg',
        name_point: 'Pousada do Simão (Pousada)',
        description_point: 'Localizada em frente ao Lago dos Tigres. Ideal para quem deseja usurfruir do melhor de Britânia e se hospedar próximo de todo o lazer que a cidade proporciona. Pousada localizada próximo aos locais dos principais eventos da cidade.',
        url_point: 'Detalhes/2?hospedagem=pousada-do-sim-o'
    }],
    'Hotel2': [
    {
        name: "Cabana's São Pedro (Hotel)",
        location_latitude: -15.24115122,
        location_longitude: -51.15815475,
        map_image_url: '../img/thumb-map.jpg',
        name_point: "Hotel",
        description_point: '',
        url_point: '#'
    },
    {
        name: "Portal do Sol (Pousada)",
        location_latitude: -15.24332963,
        location_longitude: -51.16296798,
        map_image_url: '../img/thumb-map.jpg',
        name_point: 'Pousada',
        description_point: '',
        url_point: '#'
    },
    {
        name: "Cláudio's (Hotel)",
        location_latitude: -15.2437178,
        location_longitude: -51.16324693,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Hotel",
        description_point: '',
        url_point: '#'
    },
    {
        name: "Recanto das Águas (Hotel)",
        location_latitude: -15.25300018,
        location_longitude: -51.14692569,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Hotel',
        description_point: '',
        url_point: '#'
    }
    ],

    'Camping': [
    {
        name: 'Camping Orla do Lago',
        location_latitude: -15.23954358,
        location_longitude: -51.16005778,
        map_image_url: '../storage/hotel/campingorladolago/thumb-map.jpg',
        name_point: 'Camping Orla do Lago',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        url_point: '#'
    },
    {
        name: 'Zé Pé Duro (Camping)',
        location_latitude: -15.23074975,
        location_longitude: -51.1597842,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Zé Pé Duro (Camping)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        url_point: '#'
    }
    ],


    'Restaurante': [
    {
        name: 'Fim de Tarde da Tia Lila (Restaurante)',
        location_latitude: -15.2410684,
        location_longitude: -51.16006449,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Fim de Tarde da Tia Lila (Restaurante)',
        description_point: '',
        url_point: '#'
    },
    {
        name: 'Pôr do Sol (Restaurante)',
        location_latitude: -15.23871416,
        location_longitude: -51.16072431,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Pôr do Sol (Restaurante)',
        description_point: '',
        url_point: '#'
    },
    {
        name: 'Ana Maria (Restaurante)',
        location_latitude: -15.2488339,
        location_longitude: -51.16697252,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Ana Maria (Restaurante)',
        description_point: '',
        url_point: '#'
    },
    {
        name: 'Panela de Ferro (Restaurante)',
        location_latitude: -15.23940125,
        location_longitude: -51.16317719,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Panela de Ferro (Restaurante)',
        description_point: '',
        url_point: '#'
    }
    ],

    'Lanchonete': [
    {
        name: 'Praça de Alimentação (Lanchonetes)',
        location_latitude: -15.24679472,
        location_longitude: -51.16553485,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Praça de Alimentação (Lanchonetes)',
        description_point: '',
        url_point: '#'
    },
    {
        name: "Gugas's Lanche (Lanchonetes)",
        location_latitude: -15.24007668,
        location_longitude: -51.16066396,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Gugas's Lanche (Lanchonetes)",
        description_point: '',
        url_point: '#'
    }
    ],

    'Pizzaria': [
    {
        name: "Ponto Pereira (Pizzaria)",
        location_latitude: -15.24551764,
        location_longitude: -51.16458133,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Ponto Pereira (Pizzaria)",
        description_point: '',
        url_point: '#'
    }
    ],

    'Rodoviaria': [
    {
        name: 'Rodoviária',
        location_latitude: -15.23838679,
        location_longitude: -51.16179317,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Rodoviária',
        description_point: '',
        url_point: '#'
    }
    ],

    'Turismo': [
    {
        name: 'Praia Bonita',
        location_latitude: -15.2364795,
        location_longitude: -51.15975738,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Praia Bonita',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        url_point: '#'
    }
    ],

    'Bar': [
    {
        name: 'Kiel (Bar e Guia Turístico)',
        location_latitude: -15.23786144,
        location_longitude: -51.16048157,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Kiel (Bar e Guia Turístico)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        url_point: '#'
    },
    {
        name: 'Ranchão (Bar)',
        location_latitude: -15.23591533,
        location_longitude: -51.15994513,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Ranchão (Bar)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        url_point: '#'
    },
    {
        name: 'Pier 27 (Bar)',
        location_latitude: -15.24080129,
        location_longitude: -51.15900099,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: 'Pier 27 (Bar)',
        description_point: 'Espaço para Camping público e GRATUITO localizado na Orla do Lago dos Tigres.',
        url_point: '#'
    }
    ],

    'CasaShow': [
    {
        name: "Feirinha (Eventos)",
        location_latitude: -15.25100762,
        location_longitude: -51.17205799,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Feirinha (Eventos)",
        description_point: '',
        url_point: '#'
    },
    {
        name: "Cristais Eventos (Casa de Eventos)",
        location_latitude: -15.25216305,
        location_longitude: -51.16729841,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Cristais Eventos (Casa de Eventos)",
        description_point: '',
        url_point: '#'
    },
    {
        name: "Mansão do Forró (Casa de Eventos)",
        location_latitude: -15.25330553,
        location_longitude: -51.17082417,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Mansão do Forró (Casa de Eventos)",
        description_point: '',
        url_point: '#'
    }
    ],

    "Sorveteria": [
    {
        name: "Leão Lanches (Sorveteria)",
        location_latitude: -15.24158024,
        location_longitude: -51.16181463,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Leão Lanches (Sorveteria)",
        description_point: '',
        url_point: '#'
    },
    {
        name: "Sorveteria Araguaia (Sorveteria)",
        location_latitude: -15.2471169,
        location_longitude: -51.16856441,
        map_image_url: '../img/hoteis/2/thumb-map.jpg',
        name_point: "Sorveteria Araguaia (Sorveteria)",
        description_point: '',
        url_point: '#'
    }]
//    ],
//    "Distribuidora": [
//{
//    name: "",
//    location_latitude: -15.24292131,
//    location_longitude: -51.16230681,
//    map_image_url: '../img/hoteis/2/thumb-map.jpg',
//    name_point: "",
//    description_point: '',
//    url_point: '#'
//},
//{
//    name: "",
//    location_latitude: -15.24421726,
//    location_longitude: -51.16367608,
//    map_image_url: '../img/hoteis/2/thumb-map.jpg',
//    name_point: "",
//    description_point: '',
//    url_point: '#'
//}
//    ],

//    "Gasolina": [
//    {
//        name: "(Posto de Gasolina)",
//        location_latitude: -15.24624999,
//        location_longitude: -51.17003694,
//        map_image_url: '../img/hoteis/2/thumb-map.jpg',
//        name_point: "(Posto de Gasolina)",
//        description_point: '',
//        url_point: '#'
//    },
//    {
//        name: "(Posto de Gasolina)",
//        location_latitude: -15.24291687,
//        location_longitude: -51.16230145,
//        map_image_url: '../img/hoteis/2/thumb-map.jpg',
//        name_point: "(Posto de Gasolina)",
//        description_point: '',
//        url_point: '#'
//    }
//    ]

};


var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(-15.24127746, -51.16224647),
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    heading: 90,

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
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl: false,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
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
mapObject.setTilt(45);
for (var key in markersData)
    markersData[key].forEach(function (item) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
            map: mapObject,
            icon: 'img/pins/' + key + '.png',
        });

        //if ('undefined' === typeof markers[key])
        //    markers[key] = [];
        //    markers[key].push(marker);
        //    google.maps.event.addListener(marker, 'click', (function () {
        //    closeInfoBox();
        //    getInfoBox(item).open(mapObject, this);
        //    mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));


        //}));


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
        '<h3 style="padding-bottom:5px; margin-top:5px;">' + item.name_point + '</h3>' +
        '</div>',
        disableAutoPan: true,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(40, -190),
        closeBoxMargin: '5px -20px 2px 2px',
        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        isHidden: false,
        pane: 'floatPane',
        enableEventPropagation: true
    });


};


