import { createNewsView } from "../views/newsViews.js";

const newsDiv = document.querySelector('.news-div')

export async function getNews() {
    newsDiv.innerHTML = ""
    const news = await createNewsView()
    newsDiv.appendChild(news)
}



