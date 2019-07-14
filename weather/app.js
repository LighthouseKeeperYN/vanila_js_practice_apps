const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);
const ui = new Ui();

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);

    getWeather();
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(() => ui.error('City not found'));
}
