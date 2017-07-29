    var london = {
        lat: 51.5,
        lng: -0.1
    }

    var mapOptions = {
        center: london,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var directionsService = new google.maps.DirectionsService();

    var directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    function calcRoute() {
        var request = {
            origin: document.getElementById('from').value,
            destination: document.getElementById('to').value,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
        }
        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                console.log(result);
                $(".info").html("<div class='alert-info'>From: " + document.getElementById('from').value + ".<br/>To: " + document.getElementById('to').value + ".<br/>Driving distance: " + result.routes[0].legs[0].distance.text + ".<br/>Duration: " + result.routes[0].legs[0].duration.text + "</div>");

                directionsDisplay.setDirections(result);
            } else {
                directionsDisplay.setDirections({
                    routes: []
                });
                map.setCenter(london);
                $(".info").html("<div class='alert-danger'>Could not retrieve driving distance.</div>");
            }

        });
    }

    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var options = {
        types: ['(cities)']
    }
    var autocomplete1 = new google.maps.places.Autocomplete(from, options);
    var autocomplete2 = new google.maps.places.Autocomplete(to, options);