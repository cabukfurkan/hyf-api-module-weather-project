

const apiKey = "57cacb49a5dbb78e0f2308ad919e4b6c"
const encodedApiKey = btoa(apiKey)

export async function getDaily(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${atob(encodedApiKey)}`
    const result = await fetch(url);
    const response = await result.json();
    console.log(response);

}

