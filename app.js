"use strict"

import { getCoordinates } from './src/geocode.js';
import { getCurrent } from './src/currentWeather.js';
import { speak } from './src/speak.js'
import { getHourly } from './src/hourlyWeather.js';
import { getNews } from './src/news.js';
import { getCityPhoto } from './src/cityPhotos.js';

const inputValue = document.querySelector('.inputValue')
const button = document.querySelector('.button')

async function main() {
    try {
        await getNews();
    } catch (error) {
        console.error(error)
    }
    button.addEventListener('click', async () => {
        try {
            const { lat, lon } = await getCoordinates(inputValue.value);
            const { name, desc, temp, id } = await getCurrent(lat, lon);
            inputValue.value = "";
            await getCityPhoto(name);
            speak(name, temp, desc);
            getHourly(id)
        } catch (error) {
            alert("please enter a city")
        }
    })

}

addEventListener("load", main)












