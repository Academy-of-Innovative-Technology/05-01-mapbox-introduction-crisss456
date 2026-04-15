const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiY3Jpc3MxMSIsImEiOiJjbW8wYzZmd3QwNnJiMnFvbjkyc2toMHA0In0.Ce66-J1xuSKIi7eBeC7P2A";
mapboxgl.accessToken = "";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [-74.5, 40],
    zoom: 9
});