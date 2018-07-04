$(() => {
    const weather = new Weather('98052');
    const ui = new Ui();
    const storage = new Storage();
    const zip = storage.getLocation();
    weather.changeZip(zip);
    weather.getWeather()
        .then(result => ui.render(result))
        .catch(err => console.log(err));

    $('#w-change-button').click((() => {
        const zip = $('#zip').val();
        weather.changeZip(zip);
        storage.setLocation(zip);
        weather.getWeather()
            .then(result => ui.render(result))
            .catch(err => console.log(err));
        $('#locModal').modal('hide');
    }));
});