//navbar loads//
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });
//footer loads//
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

//map loads//
mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FyM21ibGVtIiwiYSI6ImNsZ2d0eXI0aDBmNXIzZXBkZW1vazFxeDEifQ._h6RVPncjTje8WDNtMRkxg";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/outdoors-v12",
  center: [-82.644, 27.762],
  zoom: 10,
});

var marker = new mapboxgl.Marker().setLngLat([-82.644, 27.762]).addTo(map);

map.addControl(new mapboxgl.NavigationControl());
