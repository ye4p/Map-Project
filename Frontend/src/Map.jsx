import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import './Map.css'
import { Control } from 'leaflet'
import { useEffect, useState } from "react";
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

const Map = ( { popups, setPopups } ) => {
    
  const [ filteredPopups, setFilteredPopups ] = useState([])

  useEffect(() => {
    if (popups.length>0) {

    }
  }, [ popups ] );
  function showPopups() {

  }
  function hidePopups() {

  }
  function filterPopups(arr) {
    let filteredArr=[]
    for (var i = 0; i< arr.length; i++) {
      if( typeof arr[i].lat === 'number' &&     // Conditions to check for each individual node.
          typeof arr[i].lon === 'number' &&
          arr[i].name !== ''
        ) {
        filteredArr.push(arr[i])
      }
    }
    setFilteredPopups(filteredArr)
  }

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
        <Popup
        style={{width: '270px'}}
        maxWidth={270}
        >
          <CustomPopup/>
        </Popup>
      </Marker>

      {filteredPopups.map((popup) => (
        <Marker
          key={popup.id}
          position={[popup.lat, popup.lon]}
        >
          <Popup
            style={{width: '270px'}}
            maxWidth={270}
          >
            
            <CustomPopup
              name={popup.name}
              type={popup.type}
              russian={popup.russian}
              ukrainian={popup.ukrainian}
              rating={popup.rating}
              description={popup.description}
              address={popup.address}

            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  
    </>
  )
}

export default Map