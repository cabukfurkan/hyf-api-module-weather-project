
export async function getCoordinates(input) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=57cacb49a5dbb78e0f2308ad919e4b6c`
    const result = await fetch(url)
    const response = await result.json();

    const { lat, lon } = response[0];
    // console.log(lat);
    // console.log(lon);
    const coordinates = { lat, lon }
    return coordinates
}



