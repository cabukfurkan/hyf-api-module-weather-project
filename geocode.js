const apiKey = "57cacb49a5dbb78e0f2308ad919e4b6c"
const encodedApiKey = btoa(apiKey)
export async function getCoordinates(input) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${atob(encodedApiKey)}`
    const result = await fetch(url)
    const response = await result.json();

    const { lat, lon } = response[0];

    const coordinates = { lat, lon }
    return coordinates
}



