import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Initialize the Google Generative AI object
const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_API_KEY);

async function run() {
    try {
        // Get the generative model
        const model = await genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        // Define the prompt
        const prompt = "Approximate the cost of a week trip to Japan in USD with a family of four.";

        // Generate content using the model
        const result = await model.generateContent(prompt);

        // Log the raw result
        console.log("Result:", result);

        // Assuming result.response is a Promise or a response object that contains the generated content
        if (result && result.response) {
            const response = await result.response;
            console.log("Response text:", response.text());
        } else {
            console.log("No response found.");
        }

    } catch (error) {
        console.error("Error during execution:", error);
    }
}

// Run the function
run();