import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
      { nombre: "Sucursal Santiago Centro", coords: [-33.4489, -70.6693] },
      { nombre: "Sucursal Maipú", coords: [-33.5167, -70.7617] },
      { nombre: "Sucursal Las Condes", coords: [-33.4089, -70.5671] },
      { nombre: "Sucursal Viña del Mar", coords: [-33.0245, -71.5518] },
      { nombre: "Sucursal Temuco", coords: [-38.7359, -72.5904] },
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
