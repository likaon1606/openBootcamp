// function initMap() {
//     console.log("hola");
//     //map1
//     const posicion = {
//         lat: -25.363,
//         lng: 131.044
//     }
//     //map2
//     const posicion2 = {
//         lat:19.711,
//         lng: -101.220
//     }
//     //map3
//     const posicion3 = {
//         lat: 20.080,
//         lng: -98.366
//     }
//     //map 1
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: posicion
//     })
//     //map2
//     const map2 = new google.maps.Map(document.getElementById("map2"), {
//         zoom: 4,
//         center: posicion2
//     })
//     //map3
//     const map3 = new google.maps.Map(document.getElementById("map3"), {
//         zoom: 4,
//         center: posicion3
//     })
//     // aparecer una chincheta en la localización
//     //map1
//     const marker = new google.maps.Marker({
//         posicion: posicion,
//         map,
//         tittle: "Australia"
//     })
//     //map2
//     const marker2 = new google.maps.Marker({
//         posicion: posicion2,
//         map2,
//         tittle: "Morelia"
//     })
//     //map3
//    const marker3 = new google.maps.Marker({
//     posicion: posicion3,
//     map3,
//     tittle: "Tulancingo"
//    })
// }

//..............
// OTRA MANERA DE HACERLO

let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.288773445332524,
        lng: -2.163845628766325,
      },
      map,
      title: "Zarautz",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.164983935422484,
        lng: -86.78260332112534,
      },
      map,
      title: "Nashville",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.242150706885596,
        lng: -6.0775131009957715,
      },
      map,
      title: "El Palmar",
    })
  );
}