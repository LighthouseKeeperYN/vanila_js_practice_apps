class Weather {
    constructor(city, countryCode) {
        this.apiKey = '49ed6ed3ccaecc927bdefb79f29a5e57';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        this.countryCode ? this.countryCode = ',' + this.countryCode.toLowerCase() : this.countryCode = '';
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}${this.countryCode}&APPID=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        return responseData
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
} 