import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import './Map.css'
import { Control } from 'leaflet'
import { useEffect } from "react";
import L from "leaflet";
import CustomPopup from './Components/CustomPopup';

// This is to place zoomin/zoom out button at the bottom right corner instead of the default one at the top left.
function ZoomControlBottomRight() {
  const map = useMap();

  useEffect(() => {
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);
  }, [map]);

  return null;
}

const Map = () => {
  return (
   
    <>
     <MapContainer
      center={[27.9206, -82.4578]} // Coords of Tampa
      zoom={11}
      id='map'
      zoomControl={false}
      scrollWheelZoom={false}
      >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControlBottomRight />
         <Marker position={[28.05, -82.66]}>
        <Popup>
          <CustomPopup />
        </Popup>
      </Marker>
    </MapContainer>
  
    </>
  )
}

export default Map