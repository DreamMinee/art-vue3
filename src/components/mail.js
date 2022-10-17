export default class Mail {
    constructor() {
        this.baseUrl = "https://api.ido.art:443";
    }
    check(email) {
        let url = `/check-mail?mail=${email}`;
        return fetch(this.baseUrl + url,  {
            method: 'GET',
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        })
        .catch(function (err, data) {
            // There was an error
            console.warn('Something went wrong.', err, data);
        });
    }
    add(email, role) {
        let url = `/add-mail?mail=${email}&role=${role}`;
        return fetch(this.baseUrl + url,  {
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        })
            .catch(function (err, data) {
                // There was an error
                console.warn('Something went wrong.', err, data);
            });
    }
}