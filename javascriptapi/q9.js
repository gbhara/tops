// // 9. Using API Response Data
// // Assignment:
// // Process and use data received from an API.
// // Instructions:
// // 1. Fetch data from the OpenWeatherMap API (you'll need an API key).
// // 2. Extract the temperature and weather description from the response and log them to the
// // console.


const fetch = require('node-fetch');


async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b274b6a8139a5eeae5571f298f7258e&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

          
            console.log(`Temperature: ${temperature}°C`);
            console.log(`Weather: ${description}`);
        } else {
            console.error('Error fetching weather data:', data.message);
        }
    } catch (error) {
        console.error('Request failed', error);
    }
}

// Get city from command-line arguments
const city = process.argv[2];

if (!city) {
    console.log('Please provide a city name as an argument.');
    process.exit(1);
}

// Call the function to fetch weather for the provided city
getWeather(city);
