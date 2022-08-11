function initMap() {
    console.log("hola");
    //map1
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    //map2
    const posicion2 = {
        lat:19.711,
        lng: -101.220
    }
    //map3
    const posicion3 = {
        lat: 20.080,
        lng: -98.366
    }
    //map 1
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    //map2
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 4,
        center: posicion2
    })
    //map3
    const map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 4,
        center: posicion3
    })
    // aparecer una chincheta en la localización
    //map1
    const marker = new google.maps.Marker({
        posicion: posicion,
        map,
        tittle: "Australia"
    })
    //map2
    const marker2 = new google.maps.Marker({
        posicion: posicion2,
        map2,
        tittle: "Morelia"
    })
    //map3
   const marker3 = new google.maps.Marker({
    posicion: posicion3,
    map3,
    tittle: "Tulancingo"
   })
}

