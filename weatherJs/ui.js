class Ui {
    constructor(app) {
        this.$location = $('#w-location');
        this.$desc = $('#w-desc');
        this.$string = $('#w-string');
        this.$icon = $('#w-icon');
        this.$temp = $('#w-temp');
        this.$pressure = $('#w-pressure');
        this.$humidity = $('#w-humidity');

    }

    render(r) {
        this.$location.text(r.name);
        const weather = r.weather[0];
        this.$desc.text(weather.description);
        this.$string.text(weather.main);
        this.$icon.attr("src", `http://openweathermap.org/img/w/${weather.icon}.png`);
        this.$temp.text((parseFloat(r.main.temp)/10 * 1.8 + 32).toFixed(1));
        this.$pressure.text(`Pressure: ${r.main.pressure}mb`);
        this.$humidity.text(`Humidity: ${r.main.humidity}%`);
    }
}