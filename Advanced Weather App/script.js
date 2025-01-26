// current observations >  conditions > text
// const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'b7fdb60e1cmsh156f43f3ecf7c0ap18f119jsn8c24bb10965e',
// 		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
// 	}
// };

// // {                         jo chahiye iss mai se choose krenge
// //     location: {
// //       city: 'Sunnyvale',
// //       woeid: 2502265,
// //       country: 'United States',
// //       lat: 37.371609,
// //       long: -122.038254,
// //       timezone_id: 'America/Los_Angeles'
// //     },
// //     : {
// //       pubDate: 1729879131,
// //       wind: { chill: 66, direction: 'SE', speed: 1 },
// //       atmosphere: { humidity: 57, visibility: 10, pressure: 1015.9 },
// //       astronomy: { sunrise: '7:27 AM', sunset: '6:17 PM' },
// //       condition: { temperature: 61, text: 'Mostly Cloudy', code: 28 }
// //     },
// //     forecasts: [
// //       {
// //         day: 'Fri',
// //         date: 1729872000,
// //         high: 80,
// //         low: 50,
// //         text: 'Mostly Sunny',
// //         code: 34
// //       },
// //       {
// //         day: 'Sat',
// //         date: 1729958400,
// //         high: 77,
// //         low: 50,
// //         text: 'Partly Cloudy',
// //         code: 30
// //       },
// //       {
// //         day: 'Sun',
// //         date: 1730044800,
// //         high: 71,
// //         low: 51,
// //         text: 'Mostly Cloudy',
// //         code: 28
// //       },
// //       {
// //         day: 'Mon',
// //         date: 1730131200,
// //         high: 67,
// //         low: 48,
// //         text: 'Mostly Sunny',
// //         code: 34
// //       },
// //       {
// //         day: 'Tue',
// //         date: 1730217600,
// //         high: 67,
// //         low: 47,
// //         text: 'Sunny',
// //         code: 32
// //       },
// //       {
// //         day: 'Wed',
// //         date: 1730304000,
// //         high: 66,
// //         low: 51,
// //         text: 'Partly Cloudy',
// //         code: 30
// //       },
// //       {
// //         day: 'Thu',
// //         date: 1730390400,
// //         high: 65,
// //         low: 50,
// //         text: 'Sunny',
// //         code: 32
// //       },
// //       {
// //         day: 'Fri',
// //         date: 1730476800,
// //         high: 67,
// //         low: 51,
// //         text: 'Mostly Sunny',
// //         code: 34
// //       },
// //       {
// //         day: 'Sat',
// //         date: 1730563200,
// //         high: 71,
// //         low: 50,
// //         text: 'Rain',
// //         code: 12
// //       },
// //       {
// //         day: 'Sun',
// //         date: 1730649600,
// //         high: 71,
// //         low: 52,
// //         text: 'Sunny',
// //         code: 32
// //       },
// //       {
// //         day: 'Mon',
// //         date: 1730736000,
// //         high: 76,
// //         low: 54,
// //         text: 'Sunny',
// //         code: 32
// //       },
// //       {
// //         day: 'Tue',
// //         date: 1730822400,
// //         high: 70,
// //         low: 49,
// //         text: 'Mostly Cloudy',
// //         code: 28
// //       }
// //     ]
// //   }

// const weather = async () => {
    
//     try {
// 	    const response = await fetch(url, options);
// 	    const data = await response.json();
// 	    console.log(data.current_observation.condition.text)
//     } catch (error) {
// 	    console.error(error);
//     }
// }
// weather ()




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

// API_KEY for maps api
// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7fdb60e1cmsh156f43f3ecf7c0ap18f119jsn8c24bb10965e',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const weather = async () => {
    
    try {
	    const response = await fetch(url, options);
	    const data = await response.json();
	    console.log(data)
    } catch (error) {
	    console.error(error);
    }
}
weather ()

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
    
    
  //CODE GOES HERE

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
}

