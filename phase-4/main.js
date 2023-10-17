document.addEventListener("DOMContentLoaded", function() {
    // When the "Get Weather" button is clicked
    document.getElementById("callApiButton").addEventListener("click", function() {
        // Get the city from the input field
        var city = document.getElementById("city").value;
        var apiKey = 'jya/Vq8/u1D8KkPhDlfDcg==i08YxWLUkNbYz7Ep'; // Replace with your actual API key

        // Make an API call to the specified weather API using the Fetch API
        fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                // Display the weather data
                document.getElementById("temperature").textContent = result.temp;
                document.getElementById("feelsLike").textContent = result.feels_like;
                document.getElementById("windSpeed").textContent = result.wind_speed;
                document.getElementById("humidity").textContent = result.humidity;
                document.getElementById("cloudCover").textContent = result.cloud_pct;
                document.getElementById("sunriseTime").textContent = new Date(result.sunrise * 1000).toLocaleTimeString();
                document.getElementById("sunsetTime").textContent = new Date(result.sunset * 1000).toLocaleTimeString();
            })
            .catch(error => {
                console.error('Error: ', error);
                document.getElementById("apiResponse").textContent = "Error: " + error;
            });
    });
});
