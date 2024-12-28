const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=mumbai.1%2C-0.13';
const options = {
  method: 'GET',
  headers: {
      'x-rapidapi-key': 'dd8b35f7a6msh6682d69038f2069p1a0f95jsn8fa58eb2822d', // Replace with your actual API key
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Access data based on the API response structure (replace with correct properties)
    const regionName = data.location?.region; // Use optional chaining for potential missing regions
    console.log(regionName); // Or: let region = data.location?.region;  (to store in a variable)

  } catch (error) {
    console.error(error);
  }
}

fetchData();