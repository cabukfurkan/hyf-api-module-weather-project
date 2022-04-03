"use strict"

import { getCoordinates } from './src/geocode.js';
import { getCurrent } from './src/currentWeather.js';
import { speak } from './src/speak.js'
import { getHourly } from './src/hourlyWeather.js';

const inputValue = document.querySelector('.inputValue')
const button = document.querySelector('.button')

async function main() {
    button.addEventListener('click', async () => {
        try {
            const { lat, lon } = await getCoordinates(inputValue.value);
            const { name, desc, temp, id } = await getCurrent(lat, lon);
            inputValue.value = "";
            speak(name, temp, desc);
            getHourly(id)

        } catch (error) {
            alert("please enter a city")
        }
    })
}

addEventListener("load", main)












