class Ui {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewPoint = document.getElementById('w-dew-point');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description
        this.string.textContent = `${weather.main.temp} °C`; 
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} M/sec`;
    }

    error(err) {
        this.location.textContent = err;
        this.desc.textContent = ''
        this.string.textContent = ''; 
        this.icon.removeAttribute('src');
        this.humidity.textContent = '';
        this.wind.textContent = '';
    }
}