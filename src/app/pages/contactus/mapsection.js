'use client';
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const useMapHook = dynamic(
  () => import('react-leaflet').then((mod) => mod.useMap),
  { ssr: false }
);

let L;
let businessIcon;
let userIcon;

// Initialize Leaflet icons only on client side
if (typeof window !== 'undefined') {
  L = require('leaflet');
  businessIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [40, 40],
  });
  
  userIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
    iconSize: [35, 35],
  });
}

// Separate button component for location
function LocationButton({ setUserPosition, userPosition }) {
  // Import useMap from react-leaflet dynamically
  const { useMap } = require('react-leaflet');
  const map = useMap();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserPosition([latitude, longitude]);
          map.flyTo([latitude, longitude], 13);
        },
        () => {
          alert("Please allow location access to show your position.");
        }
      );
    } else {
      alert("Geolocation not supported on your device.");
    }
  };

  // Only show button if user position is NOT set
  if (userPosition) return null;

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-4 right-8 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600"
    >
      Show My Location
    </button>
  );
}

const AutoWorksMap = () => {
  const [userPosition, setUserPosition] = useState(null);
  const businessLocation = [41.3083, -72.9279]; 

  return (
    <div className="bg-[#1a1a1a] pt-15">
      <h1 className="text-2xl font-bold sm:ml-34 text-white mb-8">
        Hi We're Here
      </h1>

      <div className="relative w-[80%] h-[300px]  sm:ml-38 rounded-2xl overflow-hidden shadow-lg items-center justify-center text-center">
        <MapContainer center={businessLocation} zoom={10} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

        
          <Marker position={businessLocation} icon={businessIcon}>
            <Popup>
              <h3 className="font-bold text-lg">AutoWorks</h3>
              <p>M.A JINNAH ROAD LAHORE MAIN BRANCH</p>
              <p>⭐ 4.9 (20,077 reviews)</p>
            <a  href="https://www.pakwheels.com/forums/t/recommend-any-good-workshop-mechanic-in-lahore/43074" target="_blank"  rel="noopener noreferrer">
            View on Google Maps
            </a>
            </Popup>
          </Marker>

      
          {userPosition && (
            <Marker position={userPosition} icon={userIcon}>
              <Popup>Your Live Location is here</Popup>
            </Marker>
          )}

      
          <LocationButton
            setUserPosition={setUserPosition}
            userPosition={userPosition}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default AutoWorksMap;
