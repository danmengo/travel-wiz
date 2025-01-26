import { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import fetchGeminiCoordinates from "../api.js"; // Assuming this function is correct
import "./InteractiveMap.css";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// Cache to store the coordinates for userInput
const cachedCoordinates = {};

const userInput = localStorage.getItem("userInput");

const InteractiveMap = () => {
  const [selected, setSelected] = useState(null);
  const [city, setCity] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({
    lat: 33.6846,
    lng: -117.8265, // Default center
  });
  const apikey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apikey,
  });

  useEffect(() => {
    const fetchCenterCoordinates = async () => {
      if (userInput) {
        console.log("User input:", userInput);

        // Check if coordinates are already cached
        if (cachedCoordinates[userInput]) {
          console.log("Using cached coordinates:", cachedCoordinates[userInput]);
          setCenter({
            lat: cachedCoordinates[userInput].latitude,
            lng: cachedCoordinates[userInput].longitude,
          });
        } else {
          // If not cached, fetch coordinates and cache them
          try {
            const coordinates = await fetchGeminiCoordinates(userInput);
            if (coordinates && coordinates.latitude && coordinates.longitude) {
              console.log("Fetched coordinates:", coordinates);
              cachedCoordinates[userInput] = coordinates; // Cache the result
              setCenter({
                lat: coordinates.latitude,
                lng: coordinates.longitude,
              });
            } else {
              console.warn("Invalid coordinates returned for:", userInput);
              setCenter({ lat: 33.6846, lng: -117.8265 }); // Fallback to default center
            }
          } catch (error) {
            console.error("Error fetching coordinates:", error);
            setCenter({ lat: 33.6846, lng: -117.8265 }); // Fallback to default center
          }
        }
      }
    };

    fetchCenterCoordinates();
  }, [userInput]);

  // Log center to check if it is updated correctly
  useEffect(() => {
    console.log("Center updated to:", center);
  }, [center]);

  const getCityInfo = async (latitude, longitude) => {
    const apiKey = apikey;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const city = data.results.find((result) =>
        result.types.includes("locality")
      );

      if (city) {
        setCity(city.formatted_address);
      } else {
        setCity("City not found");
      }
    } catch (error) {
      console.error("Error fetching city information:", error);
    }
  };

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
    getCityInfo(lat, lng);
    setSelected({ lat, lng });
  };

  return (
    <div className="loadscript">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}  // Ensure center state is passed here
          zoom={12}
          onClick={handleMapClick}
          key={`${center.lat},${center.lng}`} // Force re-render when center changes
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              onClick={() => setSelected(marker)}
            />
          ))}

          {selected ? (
            <InfoWindow
              position={selected}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h2>Nearest City</h2>
                <p>{city || "Loading city information..."}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      )}
    </div>
  );
};

export default InteractiveMap;