"use strict"

import { getCoordinates } from './geocode.js';
import { getCurrentWeather } from './weather.js';
import { speak } from './speak.js'

const inputValue = document.querySelector('.inputValue')
const button = document.querySelector('.button')
const cityName = document.querySelector('.name')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const p = document.querySelectorAll('p')

async function main() {
    button.addEventListener('click', async () => {
        try {
            const { lat, lon } = await getCoordinates(inputValue.value);
            const { name, desc, temp } = await getCurrentWeather(lat, lon);
            inputValue.value = "";
            p.forEach((text) => text.style.visibility = "visible")
            cityName.innerHTML = `${name}`
            temperature.innerHTML = `${temp}`
            description.innerHTML = `${desc}`;

            speak(name, temp, desc);

        } catch (error) {
            alert("please enter a city")
        }
    })
}

addEventListener("load", main)












