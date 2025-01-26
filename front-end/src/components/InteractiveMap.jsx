import { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "50%",
    height: "500px",
  };
  
const center = {
    lat: 33.6846, 
    lng: -117.8265,  
};

const InteractiveMap = () => {
    const [selected, setSelected] = useState(null);
    const [city, setCity] = useState(null);
    const [markers, setMarkers] = useState([]);
    const apikey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


    const getCityInfo = async (latitude, longitude) => {
        const apiKey = apikey; // Replace with your API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            // Find the city from the geocoding response
            const city = data.results.find(result =>
            result.types.includes("locality")
            );

            if (city) {
                setCity(city.formatted_address); // Set the city info
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
        getCityInfo(lat, lng); // Fetch city info based on clicked location
        setSelected({ lat, lng }); // Set the selected marker position
    };

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
            onClick={handleMapClick}
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
        </LoadScript>
    );
}

export default InteractiveMap;