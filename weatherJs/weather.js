class Weather {
    constructor(zip) {
       this.appId='770d599b3f23e06b64fb07c75c12476c'; 
       this.zip = zip;
    }

    getIconUrl(iconCode) {
        return `http://openweathermap.org/img/w/${iconCode}.png`
    }

    getByZipUrl(zip) {
        return `http://api.openweathermap.org/data/2.5/weather?appid=${this.appId}&zip=${zip},us`;
    }

    async getWeather() {
        const url = this.getByZipUrl(this.zip);
        const response = await fetch(url);
        const responseData = await response.json();
        const weather = responseData.weather[0];
        const iconUrl = this.getIconUrl(weather.icon);
        return responseData
    }

    changeZip(zip) {
        this.zip = zip;
    }
}