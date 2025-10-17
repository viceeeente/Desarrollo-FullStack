import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/styles/Map.css";

export default function MapSection() {
  useEffect(() => {
    const mapContainer = document.getElementById("map");

    if (mapContainer._leaflet_id) {
      return;
    }

    const map = L.map("map");

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

  const ubicaciones = [
  { nombre: "Sucursal Chorombo", coords: [-33.544063, -71.224145] },
];


    const bounds = [];

    ubicaciones.forEach((u) => {
      L.marker(u.coords).addTo(map).bindPopup(u.nombre);
      bounds.push(u.coords);
    });

    map.fitBounds(bounds, { padding: [50, 50] });
  }, []);

  return (
    <section className="map-section">
      <div className="map-container">
        <p>Ubicación de nuestras sucursales:</p>
        <div id="map" style={{ height: "400px", width: "100%" }}></div>
      </div>
    </section>
  );
}
