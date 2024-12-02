
//const submitButton = document.querySelector('#Submit');

const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd45ef9ead7msh71d9e7bc6fa9677p119aa3jsn29f794b29720',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};

const submit = document.getElementById('Submit');
if (!submit) {
    console.error('Submit button not found');
}



async function fetchData(city) {
    try {
        Name1.innerHTML = city
        const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        
        Name1.innerHTML = result.name; // Accessing the city name
        Name.innerHTML = result.name;   // City name is in 'name' property
        region.innerHTML = result.sys?.country; // Region is not present in this response, using 'country' instead
        country.innerHTML = result.sys?.country; 
        // Country is in 'sys.country'
        temp_c.innerHTML = result.main?.temp; // Temperature is in 'main.temp' (in Kelvin, you may want to convert it to Celsius)
        condition.innerHTML = result.weather[0]?.description; // Weather description is in 'weather[0].description'
        humidity.innerHTML = result.main?.humidity; // Humidity is in 'main.humidity'
        cloud.innerHTML = result.clouds?.all; // Cloud coverage is in 'clouds.all'
        wind_degree.innerHTML = result.wind?.deg; // Wind degree is in 'wind.deg'
        wind_mph.innerHTML = result.wind?.speed; // Wind speed is in 'wind.speed'
        wind_kph.innerHTML = (result.wind?.speed * 1.60934).toFixed(2); // Convert wind speed to km/h
        wind_dir.innerHTML = result.wind?.deg; // Wind direction is in 'wind.deg'

        console.log(wind_mph.innerHTML);

    } catch (error) {
        console.error(error);
    }
}






submit.addEventListener('click', (e) => {
    e.preventDefault();

    fetchData(city.value)
});

fetchData("bhilai");