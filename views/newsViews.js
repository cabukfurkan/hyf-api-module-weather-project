'use strict';

/**
 * Create an Hourly element
 * @returns {Element}
 */
const apiKey = "pub_6142c1e3180bda8357d93be0db5180e9200e"
const encodedApiKey = btoa(apiKey)
const news = document.createElement('p')

export async function createNewsView() {
    const url = `https://newsdata.io/api/1/news?apikey=${atob(encodedApiKey)}&language=en`
    const result = await fetch(url);
    const response = await result.json();
    let string = ""
    await response.results.forEach(news => {
        const title = news.title
        const description = news.description
        string += `${title} ${description} `
    });
    news.innerHTML = String.raw`<p>${string}</p>`;

    return news
};