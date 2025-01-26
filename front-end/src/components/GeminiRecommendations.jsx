import { useState, useEffect } from 'react';
import './GeminiRecommendations.css';

const GeminiRecommendations = () => {
  // State to hold the recommendations, loading state, and error
  const [recommendations, setRecommendations] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Retrieve 'userInput' from localStorage
  const userInput = localStorage.getItem('userInput');

  useEffect(() => {
    // If there is no userInput, do not make a request
    if (!userInput) return;

    // Function to fetch recommendations based on userInput (city name)
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      setRecommendations(''); // Reset recommendations before fetching

      try {
        const prompt = `What are some recommendations for ${userInput}?`;

        // Replace with the actual Gemini API endpoint
        const response = await fetch('https://api.gemini.com/recommendations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'apikey', // Replace with your actual API key
          },
          body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        // Check if response is successful and contains recommendations
        if (response.ok && data.recommendations) {
          setRecommendations(data.recommendations);
        } else {
          setRecommendations('No recommendations found for this city.');
        }
      } catch (err) {
        setError('There was an error fetching the recommendations.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations(); // Call the function when userInput is available
  }, [userInput]); // Depend on userInput for re-fetching

  return (
    <div className="gemini-recommendations">
      <h2>Gemini Recommendations</h2>

      {/* Show a loading indicator if still loading */}
      {loading && <div className="loading">Loading...</div>}

      {/* Show error message if there was an error fetching recommendations */}
      {error && <div className="error">{error}</div>}

      {/* Display Gemini's recommendations */}
      <textarea
        readOnly
        rows={10}
        value={recommendations}  // The value will reflect the recommendations state
        placeholder="Recommendations will be displayed here..."
        className="recommendations-box"
      />
    </div>
  );
};

export default GeminiRecommendations;
