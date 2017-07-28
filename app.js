    var map;
    var london = {
                lat: 51.5,
                lng: -0.1        
    }
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: london,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }