const apiKey = "57cacb49a5dbb78e0f2308ad919e4b6c"
const encodedApiKey = btoa(apiKey)

export async function getCurrent(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${atob(encodedApiKey)}`

    const result = await fetch(url);
    const response = await result.json();
    const name = response.name;
    const desc = response.weather[0].description;
    const temp = (response.main.temp - 273.15).toFixed(0);
    const id = response.id
    return { name, desc, temp, id };
}

