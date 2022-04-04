const apiKey = "563492ad6f917000010000010a0fed4b904546d6ab15b4f19652ef6e"
const encodedApiKey = btoa(apiKey)

export async function getCityPhoto(city) {
    const result = await fetch(`https://api.pexels.com/v1/search?query=${city}`, {
        headers: {
            Authorization: atob(encodedApiKey)
        }
    })
    const response = await result.json();
    const imgAddress = response.photos[0].src.landscape
    document.body.style.backgroundImage = `url(${imgAddress})`;
}



