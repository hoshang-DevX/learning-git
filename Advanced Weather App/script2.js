/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

/**
 * Retrieve weather data from yahoo weather api
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
 */


getWeatherData = async (city)  => {   // it will always return a promise

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7fdb60e1cmsh156f43f3ecf7c0ap18f119jsn8c24bb10965e',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
    try {
	    const response = await fetch(url, options);
	    const data = await response.json();
      console.log(data)
      return data
    } 
    catch (error) {
	    console.error(error);
    }
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const weatherData = await getWeatherData(city)
  if( weatherData)
    showWeatherData(weatherData)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  const city_name = document.getElementById('city-name')
  const weather_type = document.getElementById('weather-type')
  const temp = document.getElementById('temp')
  const min_temp = document.getElementById('min-temp')
  const max_temp = document.getElementById('max-temp')

  city_name.innerHTML = `${weatherData.location.city}`
  weather_type.innerHTML = `${weatherData.current_observation.condition.text}`
  temp.innerHTML = `${weatherData.current_observation.condition.temperature}`
  min_temp.innerHTML = `${weatherData.forecasts[0].low}`
  max_temp.innerHTML = `${weatherData.forecasts[0].high}`
  
}

