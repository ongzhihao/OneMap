let sw = L.latLng(1.144, 103.535);
let ne = L.latLng(1.494, 104.502);
let bounds = L.latLngBounds(sw, ne);

let map;

$.get("https://www.onemap.gov.sg/maps/json/raster/tilejson/2.2.0/GreyLite.json", function(data, status) {
    map = L.TileJSON.createMap('mapdiv', data);

    map.setMaxBounds(bounds);
    map.setView(L.latLng(1.2868108, 103.8545349), 16);

    /** DO NOT REMOVE the OneMap attribution below **/
    map.attributionControl.setPrefix('<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;<a href="https://www.onemap.gov.sg/" target="_blank" rel="noopener noreferrer">OneMap</a>&nbsp;&copy;&nbsp;contributors&nbsp;&#124;&nbsp;<a href="https://www.sla.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Land Authority</a>');

    // Function to add a marker to the map
    function addMarker(lat, lng, name, description) {
        let marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`<b>${name}</b><br>${description}`);
    }

    // Add event listener to the form
    document.getElementById('poiForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let center = map.getCenter();

        addMarker(center.lat, center.lng, name, description);
    });
});
