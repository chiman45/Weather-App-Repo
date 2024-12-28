// main.js (Backend)
const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = 3000;

app.use(express.static('public'));

// Endpoint to fetch weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city || 'london'; // Default city
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
