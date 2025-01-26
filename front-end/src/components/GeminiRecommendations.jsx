import { useState, useEffect } from "react";
import fetchGeminiCoordinates from "../api.js"; // Import the function
import "./GeminiRecommendations.css";

const gemin_key = import.meta.env.VITE_GEMINI_API_KEY;

const GeminiRecommendations = () => {
  const [recommendations, setRecommendations] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Retrieve 'userInput' from localStorage
  const userInput = localStorage.getItem("userInput");

  useEffect(() => {
    // If there is no userInput, do not make a request
    if (!userInput) return;

    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      setRecommendations(""); // Reset recommendations before fetching
      setCoordinates(null); // Reset coordinates before fetching

      try {
        // Step 1: Fetch coordinates for the city
        const coords = await fetchGeminiCoordinates(userInput);
        if (!coords) {
          throw new Error("Failed to fetch coordinates for the city.");
        }

        setCoordinates(coords); // Update state with fetched coordinates


        // Step 2: Fetch recommendations using Gemini
        const model = await genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = `What are the best places to visit in ${userInput} located at latitude ${coords.latitude} and longitude ${coords.longitude}?`;
        const result = await model.generateContent(prompt);

        
        // const response = await fetch("https://api.gemini.com/recommendations", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: , // Use your API key
        //   },
        //   body: JSON.stringify({ prompt }),
        // });

        const data = await response.json();

        if (result && result.response.text()) {
          setRecommendations(data.recommendations);
        } else {
          setRecommendations("No recommendations found for this city.");
        }
      } catch (err) {
        setError("There was an error fetching recommendations.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations(); // Trigger the fetching process
  }, [userInput]); // Depend on `userInput` to re-fetch if it changes

  return (
    <div className="gemini-recommendations">
      <h2>Gemini Recommendations</h2>


      {/* Show loading indicator while fetching */}
      {loading && <div className="loading">Loading...</div>}

      {/* Show error message if fetching fails */}
      {error && <div className="error">{error}</div>}

      {/* Display recommendations */}
      <textarea
        readOnly
        rows={10}
        value={recommendations} // Reflect recommendations in the textarea
        placeholder="Recommendations will be displayed here..."
        className="recommendations-box"
      />
    </div>
  );
};

export default GeminiRecommendations;
