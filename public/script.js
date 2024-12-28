const submit = document.getElementById('Submit');
if (!submit) {
    console.error('Submit button not found');
}

async function fetchData(city) {
    try {
        const response = await fetch(`/weather?city=${city}`);
        const result = await response.json();
        console.log(result);

        Name1.innerHTML = result.name;
        Name.innerHTML = result.name;
        region.innerHTML = result.sys?.country;
        country.innerHTML = result.sys?.country;
        temp_c.innerHTML = result.main?.temp;
        condition.innerHTML = result.weather[0]?.description;
        humidity.innerHTML = result.main?.humidity;
        cloud.innerHTML = result.clouds?.all;
        wind_degree.innerHTML = result.wind?.deg;
        wind_mph.innerHTML = result.wind?.speed;
        wind_kph.innerHTML = (result.wind?.speed * 1.60934).toFixed(2);
        wind_dir.innerHTML = result.wind?.deg;

        console.log(wind_mph.innerHTML);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(city.value);
});

fetchData('bhilai');
