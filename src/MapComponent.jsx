import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const MapComponent = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create the map instance
    mapRef.current = L.map('map').setView([latitude, longitude], 10);

    // Add the tile layer (in this example, we're using OpenStreetMap tiles)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Add a marker to the map
    L.marker([latitude, longitude]).addTo(mapRef.current);
  }, [latitude, longitude]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;