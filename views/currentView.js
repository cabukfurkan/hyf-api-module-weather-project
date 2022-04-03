'use strict';

/**
 * Create an Hourly element
 * @returns {Element}
 */

export const createCurrentWeatherView = (name, temp, desc) => {
    const currentDiv = document.createElement('div')
    currentDiv.classList.add('current-div')
    const cityName = document.createElement('p');
    cityName.innerHTML = String.raw`<p><span class="name">${name}</span></p>`;
    currentDiv.appendChild(cityName)

    const temperature = document.createElement('p');
    temperature.innerHTML = String.raw`<p>temperature is <span class="temperature"> ${temp}</span
    ><span class="degree">&#176;</span></p>`;
    currentDiv.appendChild(temperature)

    const description = document.createElement('p');
    description.innerHTML = String.raw`<p><span class="description">${desc}</span></p>`;
    currentDiv.appendChild(description)

    const ending = document.createElement('p');
    ending.innerHTML = String.raw`<p>is waiting you</p>`;
    currentDiv.appendChild(ending)

    return currentDiv;
};