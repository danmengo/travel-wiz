import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini_key = import.meta.env.VITE_GEMINI_API_KEY;


// Initialize the Google Generative AI object
const genAI = new GoogleGenerativeAI(gemini_key);


/**
 * Fetch coordinates for a given destination using Gemini.
 * @param {string} destination - The destination to query.
 * @returns {Promise<Object>} - The coordinates or an error object.
 */
const fetchGeminiCoordinates = async (destination) => {
  try {

    console.log(import.meta.env);


    // Get the generative model
    console.log("apikey", gemini_key);

    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    // Define the prompt for coordinates
    const prompt = `What are the approximate latitude and longitude coordinates for ${destination}?`;
    // Generate content using the model
    const result = await model.generateContent(prompt);

    if (result && result.response) {
      const responseText = result.response.text().trim();
      console.log("Generated Response Text:", responseText); // Debugging the response

      // Refined regex to capture coordinates in the format of "45° N latitude, 93° W longitude"
      // const regex = /(-?\d+(\.\d+)?)[^\d]*([NS])\s*latitude[^\d]*,\s*(-?\d+(\.\d+)?)[^\d]*([EW])\s*longitude/i;
      const regex = /\*?\*?(-?\d+(\.\d+)?)°?\s*([NS])\*?\*?.*?\*?\*?(-?\d+(\.\d+)?)°?\s*([EW])\*?\*?/i;

      const match = regex.exec(responseText);

      if (match) {
        let latitude = parseFloat(match[1]);
        let longitude = parseFloat(match[4]);

        // Handle directions (N/S, E/W) by adjusting the values
        if (match[3] === "S") latitude = -latitude; // South means negative latitude
        if (match[6] === "W") longitude = -longitude; // West means negative longitude

        console.log(`Extracted Coordinates: Latitude: ${latitude}, Longitude: ${longitude}`); // Debugging extracted coordinates
        return {
          latitude,
          longitude,
        };
      } else {
        console.warn("Unable to extract coordinates from response:", responseText);
        return null;
      }
    } else {
      console.warn("No response from Gemini model.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};



export default fetchGeminiCoordinates;
