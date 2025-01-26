# Travel Wiz
Hackathon Project by Lukas Hu, Kailee Kaocharoen, Daniel Meng, and Eashan Patel

## Problem Statement
We will be creating a program the generates a personalized travel plan. 
A user will either login in or continue to use the program as a guest. 
Then they will choode the details of their trip: location, dates, travel party size, and travel style. 
The program should then generate an outline of their trip including a weather forecast, AI-generated itinerary, and AI-generated travel tips. 
This page should allow users to either save their travel plans to their profile and/or share it with friends.

## Program Organization
(continue to edit)
Site is broken down into pages:
- Homepage
- Destination
- ...

Page transition: Click the _confirm_ button to proceed to the next page.

## Requirements
#### Location
- Choose the location either by searching up the place(city, country?) you would like to visit
- The map will display a preview of the location that is searched up
- Uses API keys???

#### Date
- User selects the amount of days they wish to travel
- Calendar view
- Uses ...

#### Trip Cost
- Calculates estimation of trip cost 
- Step 1: Calculate using average travel transportation costs
- Step 2: Calculate using AI generated itinerary
- Uses AI generated information

#### Travel Tips
- AI generated travel tips 
- Prompt based on the location and time of the trip
- Uses AI generated information

#### Weather Forecast
- weather forecast for the amount of days the trip is set to
- Use API to get weather data over the date range

#### Interest Selector
- Choose travel style categories (like player stats): relax, local food, culture, outdoors, shopping, …
- Multiple select buttons

#### Travel Itinerary 
- AI generated itinerary based on data from the interest selector
- Uses AI generated information

#### User Registration/Profile Creation
- User registers with a name and password
- Uses a database to keep record of user data
- User profile allows user to view previous travel plans they generated

#### Share Travel Plans
- Option to share travel information via a link
