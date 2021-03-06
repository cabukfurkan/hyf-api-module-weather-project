# Fair Weather

## Page View

![Page view](./images/webpagess.png)

---

## How does application works?

1. Into **text field** a **city name** is entered.

1. Entered city name is used by [geocoding api](https://openweathermap.org/api/geocoding-api#:~:text=Geocoding%20API%20is%20a%20simple,integrated%20in%20all%20OpenWeather%20APIs.).

   - _Geocoding api_ returns **latitude** and **longitude** value **of the city**.

1. Returned _latitude_ and _longitude_ values are used by [current weather api](https://openweathermap.org/current).

   - _Current weather api_ returns **name of the city**, **temperature**, **description** and the **id of the city**.

   * With _name of the city, temperature and the description_ current weather information are returned and rendered by text and also browser **speaks** the information.

1. Returned value _id of the city_ is used for [hourly forecast](https://openweathermap.org/api/hourly-forecast).

   - With _hourly forecast_ forecast values for every three hours for the rest of the day are returned

1. Returned value _name of the city_ which is from the _current weather api_ is used by [image api](https://www.pexels.com/api/).

   - _Image api_ returns a picture for _the city_ and sets as background image.

1. With the [news api](https://newsdata.io/) news are returned and rendered at the top of page.

---

## Requirements

> A user should be able to enter his/her city

> A user should be able to click search

> A user should be able to see the current weather for the city entered

> Background image should change according to the city entered

> At the very above the page latest news should flow from right to left

---

## ES6 + Features

- Arrow Functions
- async/await with try/catch
- Modules export/import
- Destructuring Assignment

---

## Structure

```
├── README.md
├── app.js
├── images
│   └── webpagess.png
├── index.html
├── src
│   ├── cityPhotos.js
│   ├── currentWeather.js
│   ├── geocode.js
│   ├── hourlyWeather.js
│   ├── news.js
│   └── speak.js
├── style.css
└── views
    ├── currentView.js
    ├── hourlyView.js
    └── newsViews.js
```

---

## Note

_[News api](https://newsdata.io/pricing) has a limit of 200 request per a day for free subscription so after 200 request news api won't work_ 🥹
