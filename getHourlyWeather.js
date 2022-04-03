
import { createHourlyWeatherDiv } from "./views/hourlyView.js";

const apiKey = "57cacb49a5dbb78e0f2308ad919e4b6c"
const encodedApiKey = btoa(apiKey)
const currentWeatherDiv = document.querySelector('.current-weather-div')

const hourlyWeatherDiv = document.querySelector('.hourly-weather-div')
export async function getHourly(id) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${atob(encodedApiKey)}`
    const result = await fetch(url);
    const response = await result.json();
    let perHourWeatherDiv = ''

    for (let i = 0; i < response.list.length; i++) {
        const hourAsInteger = parseInt(response.list[i].dt_txt.split(" ")[1].split(":")[0])
        const temp = (response.list[i].main.temp - 273.15).toFixed(0)
        const desc = response.list[i].weather[0].description

        perHourWeatherDiv = createHourlyWeatherDiv(hourAsInteger, temp, desc)
        hourlyWeatherDiv.appendChild(perHourWeatherDiv)
        if (hourAsInteger === 21) {
            break
        }
    }
    const title = document.createElement('h3')
    title.innerHTML = 'Upcoming Hours'
    currentWeatherDiv.appendChild(title)
    currentWeatherDiv.appendChild(hourlyWeatherDiv)
}

