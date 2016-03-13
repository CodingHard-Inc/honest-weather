import axios from 'axios'


// Open Weather Map constans
// example: api.openweathermap.org/data/2.5/find?q=London&units=metric
// owAPI: OpenWatherAPI
const owAPI = {
  key: "3650a8b79ef8781cd7e8d8951e394b2e",
  url: "http://api.openweathermap.org/data/2.5/weather?q=",
  unit: {
      kelvin: "",
      metric: "&units=metric",
      fahrenheit: "&units=imperial"
  }
}


export default function getWeatherInfo (city) {
  return axios.get(`${owAPI.url}${city}${owAPI.unit.metric}&appid=${owAPI.key}`);

}