function EasyHttp() {
    this.http = new XMLHttpRequest();
}

EasyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    this.http.send();
    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
           callback(null, self.http.responseText); 
        } else {
            console.log(self.http.status);
        }
    };
};

EasyHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.send(JSON.stringify(data));
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    };
};

EasyHttp.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.send(JSON.stringify(data));
    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    };
};

EasyHttp.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    this.http.send();
    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
           callback(null, 'post deleted'); 
        } else {
            console.log(self.http.status);
        }
    };
};