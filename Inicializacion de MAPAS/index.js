let marker, map;

function initMap() {
    console.log("hola");
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    // aparecer una chincheta en la localización
    const marker = new google.maps.Marker({
        posicion: posicion,
        map,
        tittle: "Posición inicial"
    })

    //Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
    const geoLoc = navigator.geolocation
    const options = { timeout: 60000 }
    const watchPos = geoLoc.watchPosition(centraMapa, onError => 
        options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos);
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log(error);
}