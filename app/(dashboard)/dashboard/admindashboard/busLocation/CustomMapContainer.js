"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useState, useEffect } from "react";
import busIconUrl from "@/public/assets/bus-station.png";
import coordinates from "@/data/coordinates/map.json";
import { axiosAuthInstance } from "@/services/axios";

const BusLocation = () => {
  const [busData, setBusData] = useState([]);
  const [currentCoord, setCurrentCoord] = useState([]);
  const [coordinate, setCoordinate] = useState([]);
  const busRoutes = coordinates;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuthInstance.get("/bus");
        // if (!response.ok) {
        //   throw new Error("Failed to fetch bus data");
        // }
        console.log(response);
        setBusData(response?.data);
        const coords = response?.data?.data.map((bus) => [
          bus?.currentLocation?.latitude,
          bus?.currentLocation?.longitude,
        ]);
        setCoordinate(coords);
        console.log(coordinate);
      } catch (error) {
        console.error("Error fetching bus data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [busData]);

  const handleDropdownChange = (event) => {
    const selectedIndex = parseInt(event.target.value); // Parse the value as an integer
    if (selectedIndex === -1) {
      setCurrentCoord([]);
    } else {
      setCurrentCoord(busRoutes.coordinates[selectedIndex]);
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center">
      <h1 className="m-8 text-2xl font-bold">Bus Location</h1>
      <MapContainer
        style={{
          height: "70vh",
          width: "65vw",
        }}
        center={[28.261501948498378, 83.97219108030293]}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="leaflet-top leaflet-right">
          <div className="leaflet-control">
            <select onChange={handleDropdownChange}>
              <option value={-1}>Select Route</option>
              {busRoutes.coordinates.map((_, index) => (
                <option key={index} value={index}>
                  Route {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {currentCoord.length > 0 && (
          <Polyline
            positions={currentCoord}
            color="red"
            weight={10}
            opacity={0.4}
          />
        )}

        {coordinate.map((coords, index) => (
          <Marker
            key={index}
            position={coords}
            icon={
              new L.Icon({
                iconUrl: busIconUrl.src,
                iconRetinaUrl: busIconUrl.src,
                iconSize: [30, 30],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
              })
            }
          >
            <Popup>
              <div>
                {/* <p>Bus ID: {busData[index].busNumber}</p> */}
                Bus
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BusLocation;
