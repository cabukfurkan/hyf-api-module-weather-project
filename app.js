"use strict"

import { getCoordinates } from './geocode.js';
import { getCurrent } from './weather.js';
import { speak } from './speak.js'
import { getHourly } from './getHourlyWeather.js';
import { getDaily } from './getDailyWeather.js';

const inputValue = document.querySelector('.inputValue')
const button = document.querySelector('.button')
const cityName = document.querySelector('.name')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
// const p = document.querySelectorAll('p')

async function main() {
    button.addEventListener('click', async () => {
        try {
            const { lat, lon } = await getCoordinates(inputValue.value);
            const { name, desc, temp, id } = await getCurrent(lat, lon);
            inputValue.value = "";
            // p.forEach((text) => text.style.visibility = "visible")
            cityName.innerHTML = `${name}`
            temperature.innerHTML = `${temp}`
            description.innerHTML = `${desc}`;

            getHourly(id)
            speak(name, temp, desc);

        } catch (error) {
            alert("please enter a city")
        }
    })
}

addEventListener("load", main)












