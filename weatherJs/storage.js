class Storage {

    constructor() {
        this.zip;
        this.defaultZip = '10001';   
    }

    getLocation() {
        if (localStorage.getItem('zip') === null) {
            this.zip = this.defaultZip
        }
        else {
            this.zip = localStorage.getItem('zip');
        }
        return this.zip;

    }

    setLocation(zip) {
        this.zip = zip;
        localStorage.setItem('zip', this.zip);
    }
}