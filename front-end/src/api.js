import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Initialize the Google Generative AI object
const genAI = new GoogleGenerativeAI(apikey);

/**
 * Fetch coordinates for a given destination using Gemini.
 * @param {string} destination - The destination to query.
 * @returns {Promise<Object>} - The coordinates or an error object.
 */
export const fetchGeminiCoordinates = async (destination) => {
  try {
    // Get the generative model
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    // Define the prompt for coordinates
    const prompt = `What are the approximate latitude and longitude coordinates for ${destination}?`;

    // Generate content using the model
    const result = await model.generateContent(prompt);

    // Assuming `result.response` contains the generated response
    if (result && result.response) {
      const response = await result.response.text();

      // Attempt to parse latitude and longitude from the response
      const regex = /latitude: (\d+(\.\d+)?), longitude: (\d+(\.\d+)?)/i;
      const match = regex.exec(response);

      if (match) {
        return {
          latitude: parseFloat(match[1]),
          longitude: parseFloat(match[3]),
        };
      } else {
        console.warn("Unable to extract coordinates from response:", response);
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
