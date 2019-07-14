class Weather {
    constructor(city) {
        this.apiKey = '49ed6ed3ccaecc927bdefb79f29a5e57';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
        const responseData = await response.json();
        return responseData
    }
}

const weather = new Weather('London');

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));

