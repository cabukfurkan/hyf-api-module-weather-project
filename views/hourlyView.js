'use strict';

/**
 * Create an Hourly element
 * @returns {Element}
 */

export const createHourlyWeatherDiv = (hour, temp, desc) => {
    const hourlyDiv = document.createElement('div')
    hourlyDiv.classList.add('per-hour-weather-info')
    const hourlyWeatherHour = document.createElement('p');
    hourlyWeatherHour.innerHTML = String.raw`<p class="hourly-div-p">${hour}:00</p>`;
    hourlyDiv.appendChild(hourlyWeatherHour)

    const hourlyWeatherTemp = document.createElement('p');
    hourlyWeatherTemp.innerHTML = String.raw`<p class="hourly-div-p">${temp}</p>`;
    hourlyDiv.appendChild(hourlyWeatherTemp)

    const hourlyWeatherDesc = document.createElement('p');
    hourlyWeatherDesc.innerHTML = String.raw`<p class="hourly-div-p">${desc}</p>`;
    hourlyDiv.appendChild(hourlyWeatherDesc)


    return hourlyDiv;
};